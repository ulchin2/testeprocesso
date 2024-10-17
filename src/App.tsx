import React from 'react';
import FibonacciChecker from '../src/components/FibonacciChecker';
import FaturamentoChecker from './components/FaturamentoChecker'
import InversorDeString from '../src/components/InversorDeString';

const App: React.FC = () => {
  return (
    <div>
      <FibonacciChecker />
      <FaturamentoChecker />
      <InversorDeString />
    </div>
  );
};

export default App;
