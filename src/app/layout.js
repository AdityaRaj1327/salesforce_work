import './globals.css'

export const metadata = {
  title: 'Salesforce Assignment',
  description: 'Profile page with tabs and gallery',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
