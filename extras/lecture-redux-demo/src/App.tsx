import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainComponent } from './components/main.components';
import { store } from './State-Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}> {/**Define Provider component at high level for redux */}
        <MainComponent />
      </Provider>
      
    </div>
  );
}

export default App;
