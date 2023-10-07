import '@/styles/globals.css'

export const metadata = {
  title: 'Tailhead',
  description: 'A Forum for your pets.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
