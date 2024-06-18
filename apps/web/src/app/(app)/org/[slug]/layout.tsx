import { Header } from '@/components/header'

export default function OrgLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="space-y-4 px-2 py-4">
      <Header />

      <main className="mx-auto w-full max-w-[1200px]">{children}</main>
    </div>
  )
}
