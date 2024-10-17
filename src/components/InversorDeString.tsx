import React, { useState } from 'react';
import {
    FormContainer,
    Title,
    Label,
    Input,
    Button,
    Message,
  } from './style';
  
const InversorDeString: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [stringInvertida, setStringInvertida] = useState<string>('');

  const inverterString = (str: string): string => {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStringInvertida(inverterString(inputString));
  };

  return (
    <FormContainer>
      <Title>Inversor de String</Title>
      <form onSubmit={handleSubmit}>
        <Label>
          Insira uma string:
          <Input
            type="text"
            value={inputString}
            onChange={(e) => setInputString(e.target.value)}
          />
        </Label>
        <Button type="submit">Inverter</Button>
      </form>
      {stringInvertida && <Message>String invertida: {stringInvertida}</Message>}
    </FormContainer>
  );
};

export default InversorDeString;
