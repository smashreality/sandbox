import type { FC } from 'react';
import { Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme } from 'src/theme';
import { THEMES } from './constants';
import { StylesProvider } from '@material-ui/styles';

const history = createBrowserHistory();

const theme = createTheme({
  theme: THEMES.LIGHT
});
interface Props {
  [key: string]: any;
}

const Root: FC<Props> = ({ children, ...rest }) => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <Router history={history}>{children}</Router>
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default Root;
