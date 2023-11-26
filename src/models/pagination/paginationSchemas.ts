import { z } from "zod"

const sortInfo = z.object({
  sorted: z.boolean(),
  empty: z.boolean(),
  unsorted: z.boolean()
})

const pageableInfo = z.object({
  pageNumber: z.number(),
  pageSize: z.number(),
  sort: sortInfo,
  offset: z.number(),
  paged: z.boolean(),
  unpaged: z.boolean()
})

export function getPaginatedSchema<Entity extends z.ZodTypeAny>(entity: Entity) {
  return z.object({
    content: z.array(entity),
    pageable: pageableInfo,
    last: z.boolean(),
    totalElements: z.number(),
    totalPages: z.number(),
    first: z.boolean(),
    size: z.boolean(),
    number: z.number(),
    sort: sortInfo,
    numberOfElements: z.number(),
    empty: z.boolean()
  })
}
