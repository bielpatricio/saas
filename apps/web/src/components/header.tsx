import { Slash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import Eduardo from '@/assets/eduardo.svg'
import { ability } from '@/auth/auth'

import { OrganizationSwitcher } from './organization-switcher'
import { ProfileButton } from './profile-button'
import { ThemeSwitcher } from './theme/theme-switcher'
import { Separator } from './ui/separator'

export async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between border-b pb-2">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image src={Eduardo} alt="Eduardo" className="size-12 dark:invert" />
        </Link>

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && <p>Projetos</p>}
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <Separator className="h-5" orientation="vertical" />
        <ProfileButton />
      </div>
    </div>
  )
}
