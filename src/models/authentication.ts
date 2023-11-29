import { z } from "zod";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

export const signUpSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
  role: z.array(z.string()),
  email: z.string().email(),
})

export type SignUpDTO = z.infer<typeof signUpSchema>

export async function signUp(dto: SignUpDTO) {
  //signUpSchema.parse(dto);

  const res = await fetch(`http://localhost:8080/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dto)
  });

  if (res.status === 401) {
    throw new Error();
  }

  return res.json();
}
