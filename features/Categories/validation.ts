import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/constants/file";
import { errorMessages } from "@/shared/messageErrors";
import z from "zod";


export const categoryZod = z.object({
  name: z.string().min(3, { error: errorMessages.minChar(3) }),
  slug: z.string().min(3, { error: errorMessages.minChar(3) }),
  icon: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      error: errorMessages.maxSize(MAX_FILE_SIZE),
    })
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      error: errorMessages.typesFile,
    }),
});

export type categoryInfer = z.infer<typeof categoryZod>;
