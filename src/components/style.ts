import styled from 'styled-components';


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;


export const Title = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
`;


export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 90%;
  margin-bottom: 10px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;


export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;


export const Message = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #333;
`;


// Estilizando o container principal
export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaço entre os componentes */
  align-items: flex-start; /* Alinhamento no início */
  margin: 20px; /* Margem externa */
`;

// Estilizando o container do faturamento
export const FaturamentoContainer = styled.div`
  flex: 1; /* Faz o componente ocupar espaço disponível */
  margin-right: 20px; /* Espaço à direita do componente */
`;

// Estilizando o container existente
export const MeuContainer = styled.div`
  flex: 1; /* Também faz esse componente ocupar espaço */
  /* Adicione mais estilos aqui conforme necessário */
`;
