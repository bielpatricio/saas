'use server'

import { redirect } from 'next/navigation'

export async function signWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'https://github.com')

  githubSignInURL.searchParams.set('client_id', 'Ov23li8Wrj3HJXgrqE2x')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  githubSignInURL.searchParams.set('scope', 'user')

  console.info({ githubSignInURL: githubSignInURL.toString() })

  redirect(githubSignInURL.toString())
}
