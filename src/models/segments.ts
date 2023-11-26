import { z } from "zod";

import { getPaginatedSchema } from "./pagination/paginationSchemas";
import { contactSchema } from "./contacts";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

export const segmentSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  contacts: z.array(contactSchema)
});

const paginatedSegments = getPaginatedSchema(segmentSchema);
type PaginatedSegments = z.infer<typeof paginatedSegments>;

export async function getAllSegments(filter: string = "", page: number = 1, size: number = 10): Promise<PaginatedSegments> {
  const res = await fetch(`${baseUrl}/api/v1/segments?filter=${filter}&page=${page}&size=${size}`);
  return res.json();
}
