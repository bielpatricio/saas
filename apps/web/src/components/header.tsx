import Image from 'next/image'

import Eduardo from '@/assets/eduardo.svg'

import { ProfileButton } from './profile-button'

export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={Eduardo} alt="Eduardo" className="size-12 dark:invert" />
      </div>

      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}
