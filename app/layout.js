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
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.5,initial-scale=1"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}


