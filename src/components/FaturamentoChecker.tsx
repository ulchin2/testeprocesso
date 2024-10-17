import React, { useState, useEffect } from 'react';
import {
  FormContainer,
  Title,
  Message,
} from './style'; 


interface Faturamento {
  dia: number;
  valor: number;
}

const FaturamentoDistribuidora: React.FC = () => {
  const [dados, setDados] = useState<Faturamento[]>([]);
  const [menorFaturamento, setMenorFaturamento] = useState<number | null>(null);
  const [maiorFaturamento, setMaiorFaturamento] = useState<number | null>(null);
  const [diasAcimaMedia, setDiasAcimaMedia] = useState<number>(0);

  useEffect(() => {

    const carregarDados = async () => {
      try {
        const response = await fetch('/faturamento.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar o JSON');
        }
        const data: Faturamento[] = await response.json();
        setDados(data);
      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    carregarDados();
  }, []);

  useEffect(() => {
    if (dados.length > 0) {

      const menor = Math.min(...dados.map(d => d.valor));
      const maior = Math.max(...dados.map(d => d.valor));
      setMenorFaturamento(menor);
      setMaiorFaturamento(maior);


      const total = dados.reduce((acc, curr) => acc + curr.valor, 0);
      const media = total / dados.length;


      const diasAcima = dados.filter(d => d.valor > media).length;
      setDiasAcimaMedia(diasAcima);
    }
  }, [dados]);

  return (
    <FormContainer>
      <Title>Faturamento Distribuidora</Title>
      {menorFaturamento !== null && (
        <Message>Menor faturamento: R$ {menorFaturamento.toFixed(2)}</Message>
      )}
      {maiorFaturamento !== null && (
        <Message>Maior faturamento: R$ {maiorFaturamento.toFixed(2)}</Message>
      )}
      <Message>Dias com faturamento superior à média: {diasAcimaMedia}</Message>
    </FormContainer>
  );
};

export default FaturamentoDistribuidora;
