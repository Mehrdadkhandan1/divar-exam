import { errorMessages } from "@/shared/messageErrors"
import z from "zod"


export const categoryZod = z.object({
    name: z.string().min(3, { error: errorMessages.minChar(3) }),
    slug: z.string().min(3, { error: errorMessages.minChar(3) }),
})

export type categoryInfer = z.infer<typeof categoryZod>