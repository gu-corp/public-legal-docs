import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'G.U. Group — Legal & Policies',
    template: '%s — G.U. Group Legal',
  },
  description: 'Public legal and policy documents for G.U. Group products.',
}

const navbar = (
  <Navbar
    logo={<b>G.U. Group Legal</b>}
    projectLink="https://github.com/gu-corp/public-legal-docs"
  />
)

const footer = (
  <Footer>
    <span>
      © {new Date().getFullYear()} G.U. Group. The English version of each
      document is authoritative.
    </span>
  </Footer>
)

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const pageMap = await getPageMap(`/${lang}`)

  return (
    <html lang={lang} dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={
            <Banner storageKey="legal-notice">
              These documents are provided for reference. The English version is
              authoritative.
            </Banner>
          }
          navbar={navbar}
          footer={footer}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/gu-corp/public-legal-docs/tree/main"
          i18n={[
            { locale: 'en', name: 'English' },
            { locale: 'ja', name: '日本語' },
          ]}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
