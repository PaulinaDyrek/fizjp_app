import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fizjostacja',
  description: 'Gabinet fizjoterapii',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}