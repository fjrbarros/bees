import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import user from '../../store/user';
import brewery from '../../store/brewery';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../styles/Theme';
import { ToastContainer } from 'react-toastify';

function renderUi(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { user, brewery }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Theme>
          <BrowserRouter>{children}</BrowserRouter>
        </Theme>
        <ToastContainer />
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { renderUi };
