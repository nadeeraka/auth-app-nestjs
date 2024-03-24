import { z } from 'zod';

export const createCatSchema = z
  .object({
    username: z
      .string()
      .min(4, {
        message: 'This field has to be filled.',
      })
      .max(15, {
        message: 'Maximum length reached',
      }),
    email: z
      .string()
      .min(1, { message: 'This field has to be filled.' })
      .max(30, {
        message: 'Maximum length reached',
      })
      .email('This is not a valid email.'),
    // .refine((e) => e === "[email protected]", "This email is not in our database")
    password: z
      .string()
      .min(4, {
        message: 'password must include at least 4 characters .',
      })
      .max(50, {
        message: 'Maximum length reached',
      }),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
