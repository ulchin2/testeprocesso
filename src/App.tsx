import React from 'react';
import FibonacciChecker from '../src/components/FibonacciChecker';
import FaturamentoChecker from './components/FaturamentoChecker'
import InversorDeString from '../src/components/InversorDeString';
import FaturamentoPorEstado from './components/FaturamentoPorEstado';
import {
  MainContainer,
  FaturamentoContainer,
  MeuContainer,
} from '../src/style';

const App: React.FC = () => {
  return (
    <MainContainer>
      <div>
        <FibonacciChecker />
      </div>
      <div>
        <FaturamentoChecker />
      </div>
      <div>
        <InversorDeString />
      </div>
      <div>
        <FaturamentoPorEstado />
      </div>
    </MainContainer>
  );
};

export default App;
