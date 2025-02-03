import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { GlobalCssPriority } from '~/components/templates/material/MaterialCacheLayout';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '~/styles/main.scss';

const antonSC = localFont({
  src: './fonts/AntonSC-R.ttf',
  variable: '--font-anton',
  weight: '100 900',
});
const exo2 = localFont({
  src: './fonts/Exo2-VF.ttf',
  variable: '--font-exo2',
  weight: '100 900',
});
const rubik = localFont({
  src: './fonts/Rubik-VF.ttf',
  variable: '--font-rubik',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${antonSC.variable} ${exo2.variable} ${rubik.variable} antialiased`}>
        {/* //? for material ui */}
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <GlobalCssPriority>{children}</GlobalCssPriority>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
