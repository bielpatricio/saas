import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getProfile } from '@/http/get-profile'

export function isAuthenticated() {
  return !!cookies().get('token')?.value
}

// call function just in server side components
export async function auth() {
  const token = cookies().get('token')?.value

  console.info('aaaaaaaaaaaaaa', { token })

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { user } = await getProfile()

    console.info('aaaaaaaaaaaaaa', { user })

    return { user }
  } catch (error) {
    console.error(error)
  }

  redirect('/api/auth/sign-out')
}
