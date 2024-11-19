import { z } from "zod";

export const FormSchema = z.object({
  userName: z.string().email("invalid UserName."),
  password: z.string().min(8,"Password must be at least 8 characters."),
});
