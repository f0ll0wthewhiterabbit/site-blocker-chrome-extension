import type { AppProps } from 'next/app';
import { AppProvider } from './app-providers';

export function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
