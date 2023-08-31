import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "./global.css"

export const metadata: Metadata = {
  title: process.env.SITE_TITLE,
  description: process.env.SITE_DESC,
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }];
}

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode, params: any }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
