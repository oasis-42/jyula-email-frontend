import { z } from "zod";

import { getPaginatedSchema } from "./pagination/paginationSchemas";

const baseUrl = "http://localhost:8080";

export const templateSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  about: z.string(),
  isFavorite: z.boolean(),
  version: z.string()
});

const paginatedTemplates = getPaginatedSchema(templateSchema);
type paginatedTemplates = z.infer<typeof paginatedTemplates>;

export async function getAllTemplates(filter: string = "", page: number = 1, size: number = 10): Promise<paginatedTemplates> {
  const res = await fetch(`${baseUrl}/api/v1/templates?filter=${filter}&page=${page}&size=${size}`);
  return res.json();
}
