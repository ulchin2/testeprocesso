import styled from 'styled-components';

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
