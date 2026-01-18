import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string({ required_error: 'Name is required.' }).trim().min(2, 'Please enter a valid name.').max(50),
    email: z.string({ required_error: 'Email is required.' }).email('Must be a valid email address.'),
    message: z.string().trim().min(20, 'Please enter a message containing at least 20 characters.').max(500)
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
