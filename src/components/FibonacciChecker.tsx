import React, { useState } from 'react';
import {
  FormContainer,
  Title,
  Label,
  Input,
  Button,
  Message,
} from './style';

const FibonacciChecker: React.FC = () => {
  const [numero, setNumero] = useState<number | string>('');
  const [mensagemFibonacci, setMensagemFibonacci] = useState<string>('');

  const pertenceFibonacci = (numero: number): { pertence: boolean; posicao: number } => {
    let a = 0, b = 1, posicao = 1;

    if (numero === 0) return { pertence: true, posicao: 0 };
    if (numero === 1) return { pertence: true, posicao: 1 };

    while (b < numero) {
      [a, b] = [b, a + b];
      posicao++;
    }

    return { pertence: b === numero, posicao: b === numero ? posicao : -1 };
  };

  const handleSubmitFibonacci = (event: React.FormEvent) => {
    event.preventDefault();
    const num = Number(numero);
    if (!isNaN(num)) {
      const { pertence, posicao } = pertenceFibonacci(num);
      if (pertence) {
        setMensagemFibonacci(`O número ${num} pertence à sequência de Fibonacci e está na posição ${posicao}.`);
      } else {
        setMensagemFibonacci(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
      }
    } else {
      setMensagemFibonacci('Por favor, insira um número válido.');
    }
  };

  const [inputString, setInputString] = useState<string>('');
  const [mensagemLetraA, setMensagemLetraA] = useState<string>('');

  const handleSubmitLetterA = (event: React.FormEvent) => {
    event.preventDefault();
    const countA = (inputString.match(/a/gi) || []).length;
    if (countA > 0) {
      setMensagemLetraA(`A letra 'a' aparece ${countA} vezes.`);
    } else {
      setMensagemLetraA("A letra 'a' não aparece na string.");
    }
  };

  return (
    <>
      <FormContainer>
        <Title>Verificador de Fibonacci</Title>
        <form onSubmit={handleSubmitFibonacci}>
          <Label>
            Insira um número:
            <Input
              type="number"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </Label>
          <Button type="submit">Verificar</Button>
        </form>
        {mensagemFibonacci && <Message>{mensagemFibonacci}</Message>}
      </FormContainer>

      <FormContainer>
        <Title>Verificador de Letra 'A'</Title>
        <form onSubmit={handleSubmitLetterA}>
          <Label>
            Insira Algum Texto:
            <Input
              type="text"
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
            />
          </Label>
          <Button type="submit">Verificar</Button>
        </form>
        {mensagemLetraA && <Message>{mensagemLetraA}</Message>}
      </FormContainer>
    </>
  );
};

export default FibonacciChecker;
