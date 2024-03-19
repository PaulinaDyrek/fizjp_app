import './globals.css';

export const metadata = {
  title: 'Fizjostacja',
  description: 'Gabinet fizjoterapii',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortct: ['/apple-touch-icon.png'],
  },
};

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
  );
}
