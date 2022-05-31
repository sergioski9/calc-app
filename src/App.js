import React from 'react'
import Result from './components/Result';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import './App.css';


function App() {
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers onClickNumber={number => {
        console.log(number)
      }}/>
      <Functions
        onContentClear={() =>
          console.log('content clear')}
        onDelete={() =>
          console.log('content delete')}
      />
      <MathOperations
        onClickOperation={operation =>
          console.log(operation)
        }
        onClickEqual={equal =>
          console.log(equal)
        } />
    </main>
  );
}

export default App;
