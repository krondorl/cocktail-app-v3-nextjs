import '../styles/index.css';

export const metadata = {
  title: 'Cocktail App v3.0',
  description: 'Made with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
