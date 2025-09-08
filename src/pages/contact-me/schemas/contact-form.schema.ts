import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(50, 'Maximum 50 characters allowed')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .trim(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(200, 'Maximum 200 characters allowed')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
