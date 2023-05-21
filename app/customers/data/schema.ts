import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const clientSchema = z.object({
  id: z.string(),
  email: z.string(),
  reservation: z.string(),
  paymentStatus: z.string(),
})

export type Task = z.infer<typeof clientSchema>
