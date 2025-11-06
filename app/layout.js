import './globals.css'

export const metadata = {
  title: 'MR NIPUN OFC / TECH-WEB',
  description: 'Full Stack Developer | UI/UX Designer | Tech Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
