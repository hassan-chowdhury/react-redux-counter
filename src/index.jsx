import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import reducer from './reducers';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div>
      <Counter />
    </div>
  </Provider>
);

render(<App />, document.getElementById('root'));
