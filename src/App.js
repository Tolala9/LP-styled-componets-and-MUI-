import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { Container } from './components/styles/Сontainer.styled';
import openSans from 'typeface-open-sans';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = createTheme({
  typography: {
    fontFamily:
      '"Open Sans", sans-serif',
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [openSans],
      },
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        backgroundColor: '#ff00ff',
      `
    },
  },

  colors: {
    header: '#ebfbff',
    body: '#ffff',
    footer: '#003333',
  },

  mobile: '768px',
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <CssBaseline />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}

        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
