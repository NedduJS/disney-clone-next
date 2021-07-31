import { AppProps } from 'next/app';
import '../global.css';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Aditional props
  // Aditional layout
  // Manejar errores - componentDidCatch
  return <Component {...pageProps} />;
};

export default MyApp;
