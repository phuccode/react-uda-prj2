import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

test('renders learn react link', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const received = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(received).toMatchSnapshot();
});
