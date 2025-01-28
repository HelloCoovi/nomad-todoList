import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter } from 'react-router';

import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme.ts';

import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/nomad-todoList'>
      <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);
