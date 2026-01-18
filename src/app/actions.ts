'use server';

import { Resend } from 'resend';

import { contactFormSchema, ContactFormSchemaType } from '@/lib/schemas';
import { string } from 'zod';

type ActionResponse =
    | { success: true }
    | {
          success: false;
          error: {
              message: string;
          };
      };

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(values: ContactFormSchemaType): Promise<ActionResponse> {
    const validateFields = contactFormSchema.safeParse(values);

    if (!validateFields.success && validateFields.error) {
        return {
            success: false,
            error: {
                message: validateFields.error.issues[0]?.message || 'Unknown error'
            }
        };
    }

    try {
        await resend.emails.send({
            from: values.email,
            to: 'vokaraon@gmail.com',
            replyTo: values.email,
            subject: `New Contact Form Submission from ${values.name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${values.name}</p>
                <p><strong>Email:</strong> ${values.email}</p>
                <p><strong>Message:</strong></p>
                <p>${values.message.replace(/\n/g, '<br>')}</p>
            `
        });
        console.log("email:", values.email, "name:", values.name, "message:", values.message);
        return { success: true };
    } catch (error) {
        console.error('Email sending error:', error);
        return {
            success: false,
            error: {
                message: 'Failed to send email. Please try again later.'
            }
        };
    }
}
