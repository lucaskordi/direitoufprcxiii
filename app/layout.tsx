import './globals.css'
import { inter } from '@/lib/fonts'

export const metadata = {
  title: 'Direito UFPR',
  description: 'Website for Direito UFPR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-codec-cold bg-formo-dark text-formo-cream">{children}</body>
    </html>
  )
}
