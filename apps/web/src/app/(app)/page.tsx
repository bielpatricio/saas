import { Header } from '@/components/header'

export default async function Home() {
  return (
    <div className="space-y-4 px-2 py-4">
      <Header />

      <main className="mx-auto w-full max-w-[1200px] space-y-4">
        <h1 className="text-sm text-muted-foreground">
          Select an organization
        </h1>
      </main>
    </div>
  )
}
