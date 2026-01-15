import './globals.css'

export const metadata = {
  title: 'Simplilearn - Dallas Round Table',
  description: 'The Skills That Matter Next: Preparing Your Workforce & Leaders for the AI Era',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
