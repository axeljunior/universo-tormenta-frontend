import type { AppProps } from 'next/app'
import "@/styles/globals.css"
import RootLayout from '@/app/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <main><Component {...pageProps} /></main>
    </RootLayout>
  )
}