import './globals.css'

export const metadata = {
  title: 'Chaika - Stop Smoking',
  description: 'Quit smoking with our proven method'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}