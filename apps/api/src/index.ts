import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER', id: 'user-id' })

const userCanDeleteSomeoneElse = ability.can('delete', 'User')

const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log({ userCanDeleteSomeoneElse })
console.log({ userCannotDeleteSomeoneElse })
