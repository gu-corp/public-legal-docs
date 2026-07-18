import nextra from 'nextra'

const withNextra = nextra({
  // Nextra 4 reads MDX from the `content/` directory.
})

export default withNextra({
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
  },
})
