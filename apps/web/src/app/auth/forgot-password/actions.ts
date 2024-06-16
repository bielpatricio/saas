'use server'

import { HTTPError } from 'ky'
import { z } from 'zod'

import { forgotPassword } from '@/http/forgot-password'

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: 'Please, provide a valid e-mail address.' }),
})

export async function forgotPasswordAction(data: FormData) {
  const result = forgotPasswordSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const { email } = result.data

  try {
    await forgotPassword({
      email,
    })
  } catch (error) {
    if (error instanceof HTTPError) {
      const { message } = await error.response.json()

      return {
        success: false,
        message,
        errors: null,
      }
    }

    console.error(error)

    return {
      success: false,
      message: 'Unexpected error. Please, try again in a few minutes.',
      errors: null,
    }
  }

  return {
    success: true,
    message: null,
    errors: null,
  }
}
