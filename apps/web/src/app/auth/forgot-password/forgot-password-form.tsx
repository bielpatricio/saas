'use client'

import { AlertTriangle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'

import { forgotPasswordAction } from './actions'

export function ForgotPasswordForm() {
  // useRouter in client side
  const router = useRouter()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    forgotPasswordAction,
    () => {
      router.push('/auth/sign-in')
    },
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Recover password failed</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" id="email" name="email" className="w-full" />

        {errors?.email && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full">
        Recover password
      </Button>

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Create account'
        )}
      </Button>

      <Button variant="link" size="sm" className="w-full">
        <Link href="/auth/sign-in">Sign in instead</Link>
      </Button>
    </form>
  )
}
