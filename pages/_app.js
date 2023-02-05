import MainLayout from '@/components/Layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
