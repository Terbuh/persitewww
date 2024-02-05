import './globals.css'

export const metadata = {
  title: 'Persite',
  description: 'Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
