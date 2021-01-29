import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoney from '../hooks/useMoney';
import useCripto from '../hooks/useCriptocurrency';
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`

const Form = () => {

    const options = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    const [money, SelectMoney] = useMoney('Elige tu Moneda', '', options);

    const [list, setList] = useState([]);

    const [cripto, SelectCripto] = useCripto('Elige tu Criptomoneda', '', list);

    useEffect(() => {
        const queryApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const res = await axios.get(url);
            setList(res.data.Data);
        }
        queryApi();
    }, []);

    return (  
        <form>
            <SelectMoney />
            <SelectCripto />
            <Button 
             type="submit"
             value="Calcular"
             />
        </form>
    );
}
 
export default Form;