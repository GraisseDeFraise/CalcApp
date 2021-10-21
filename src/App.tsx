import React from 'react';
import styled from 'styled-components';
import './App.css';
import Calculator from './components/Calculator';

const Container = styled.div`
  background: #323232;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
