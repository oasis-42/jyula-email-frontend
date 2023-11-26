import { z } from "zod";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

export const sendCampaignSchema = z.object({
  campaignName: z.string(),
  templateId: z.string().uuid(),
  sendTo: z.object({
    contacts: z.array(z.string().uuid()),
    segments: z.array(z.string().uuid())
  }),
  schedule: z.optional(z.object({
    dateTime: z.string().datetime(),
    cron: z.string()
  }))
})

export type SendCampaignDTO = z.infer<typeof sendCampaignSchema>

export async function sendCampaign(dto: SendCampaignDTO) {
  sendCampaignSchema.parse(dto);

  const res = await fetch(`${baseUrl}/api/v1/campaigns/send`, {
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
