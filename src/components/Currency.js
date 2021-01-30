import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;

const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Currency = ({res}) => {
    
    if(Object.keys(res).length === 0) return null;
    return (  
        <ResDiv>
            <Price>El precio es: <span>{res.PRICE}</span> </Price>
            <Info>Precio más alto del día: <span>{res.HIGHDAY}</span> </Info>
            <Info>Precio más bajo del día: <span>{res.LOWDAY}</span> </Info>
            <Info>Variación últimas 24 horas: <span>{res.CHANGEPCT24HOUR}</span> </Info>
            <Info>Última Actualización: <span>{res.LASTUPDATE}</span> </Info>
        </ResDiv>
    );
}

Currency.propTypes = {
    res: PropTypes.object.isRequired
}
 
export default Currency;