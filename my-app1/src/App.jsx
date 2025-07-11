import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Counter from'./Counter';
import PostFetcher from './PostFetcher'

function App() {
  return (
    <div className="App">
      <Counter />
      <PostFetcher />
    </div>
  );
}

export default App;
