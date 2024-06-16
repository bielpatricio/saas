'use server'

import { api } from '@/http/api-client'

interface ForgotPasswordRequest {
  email: string
}

type ForgotPasswordResponse = void

export async function forgotPassword({
  email,
}: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
  await api.post('password/recover', {
    json: { email },
  })
}
