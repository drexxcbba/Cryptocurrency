import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import img from './cryptomonedas.png';
import Form from './components/Form';
import Currency from './components/Currency';
import axios from 'axios';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Img = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [money, setMoney] = useState('');

  const [cripto, setCripto] = useState('');

  const [res, setRes] = useState({});

  useEffect(() => {
    const getCripto = async () => {
      if(money === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${money}`;
      const res = await axios.get(url);
      setRes(res.data.DISPLAY[cripto][money]);
    }
    getCripto();
  }, [money, cripto]);

  return (
    <Container>
      <div>
        <Img 
         src={img}
         alt="imagen cripto"
         />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form 
         setMoney={setMoney}
         setCripto={setCripto}
         />
         <Currency
          res={res}
          />
      </div>
    </Container>
  );
}

export default App;
