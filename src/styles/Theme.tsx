import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';

interface Props {
  children: React.ReactNode;
}

export const theme = {
  colors: {
    primary: '#F2EC54',
    secondary: '#FFFEF0',
    black: '#000000',
  },
};

const Theme: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
