import { z } from "zod";

import { getPaginatedSchema } from "./pagination/paginationSchemas";

const baseUrl = "http://localhost:8080";

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

