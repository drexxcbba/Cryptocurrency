import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`

const useMoney = (label, stateInit, options) => {

    const [state, setState] = useState(stateInit);
    
    const Selection = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
             onChange={ e => setState(e.target.value)}
             value={state}
             >
                <option value="">- Seleccione -</option>
                {options.map(it => (
                    <option key={it.codigo} value={it.codigo}>{it.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, Selection, setState];
}
 
export default useMoney;