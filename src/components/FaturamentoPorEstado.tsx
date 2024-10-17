import React, { useState, useEffect } from 'react';
import {
    FormContainer,
    Title,
    Label,
    Input,
    Button,
    Message,
  } from './style';


interface FaturamentoEstado {
  estado: string;
  valor: number;
}

const FaturamentoPorEstado: React.FC = () => {
  const [dados, setDados] = useState<FaturamentoEstado[]>([]);
  const [percentuais, setPercentuais] = useState<{ [key: string]: number }>({});

  useEffect(() => {

    const faturamento = [
      { estado: 'SP', valor: 67836.43 },
      { estado: 'RJ', valor: 36678.66 },
      { estado: 'MG', valor: 29229.88 },
      { estado: 'ES', valor: 27165.48 },
      { estado: 'Outros', valor: 19849.53 },
    ];

    setDados(faturamento);
  }, []);

  useEffect(() => {

    const total = dados.reduce((acc, curr) => acc + curr.valor, 0);


    const percentuais = dados.reduce((acc, curr) => {
      acc[curr.estado] = (curr.valor / total) * 100;
      return acc;
    }, {} as { [key: string]: number });

    setPercentuais(percentuais);
  }, [dados]);

  return (
    <FormContainer>
      <Title>Faturamento Mensal por Estado</Title>
      {Object.entries(percentuais).map(([estado, percentual]) => (
        <p key={estado}>
          {estado}: {percentual.toFixed(2)}%
        </p>
      ))}
    </FormContainer>
  );
};

export default FaturamentoPorEstado;
