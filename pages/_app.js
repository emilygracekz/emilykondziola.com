import '../styles/globals.css';
import Theme from '../Components/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />;
    </Theme>
  );
}

export default MyApp;
