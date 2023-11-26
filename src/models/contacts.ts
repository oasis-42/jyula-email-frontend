import { z } from "zod";

import { getPaginatedSchema } from "./pagination/paginationSchemas";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

export const contactSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email(),
});

export type Contact = z.infer<typeof contactSchema>;

const paginatedContacts = getPaginatedSchema(contactSchema);
type PaginatedContacts = z.infer<typeof paginatedContacts>;

export async function getAllContacts(filter: string = "", page: number = 1, size: number = 10): Promise<PaginatedContacts> {
  const res = await fetch(`${baseUrl}/api/v1/contacts?filter=${filter}&page=${page}&size=${size}`);
  return res.json();
}

const createOrUpdateContactSchema = contactSchema.omit({ id: true });

type CreateOrUpdateContactDTO = z.infer<typeof contactSchema>;

export async function createContact(dto: CreateOrUpdateContactDTO) {
  createOrUpdateContactSchema.parse(dto);

  const res = await fetch(`${baseUrl}/api/v1/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dto)
  });

  if (res.status === 401) {
    throw new Error();
  }
}

export async function deleteContact(id: string) {
  z.string().uuid().parse(id);

  const res = await fetch(`${baseUrl}/api/v1/contacts${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
  });

  if (res.status === 401) {
    throw new Error();
  }
}

export async function getContactById(id: string) {
  z.string().uuid().parse(id);

  const res = await fetch(`${baseUrl}/api/v1/contacts${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });

  if (res.status === 401) {
    throw new Error();
  }

  const content = res.json();

  contactSchema.parse(content);

  return content;
}

export async function updateContact(id: string, dto: CreateOrUpdateContactDTO) {
  z.string().uuid().parse(id);
  createOrUpdateContactSchema.parse(dto);

  const res = await fetch(`${baseUrl}/api/v1/contacts${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dto)
  });

  if (res.status === 401) {
    throw new Error();
  }

  const content = res.json();

  contactSchema.parse(content);

  return content;
}
