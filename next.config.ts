import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
//   basePath: '/alexey-omelchuk',
//   assetPrefix: '/alexey-omelchuk',
  // Elimina la línea: output: 'standalone',
}

module.exports = withNextIntl(nextConfig);