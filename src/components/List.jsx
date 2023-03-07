import React from 'react';
import styled from "styled-components";
const ListStyled = styled.ul`
  list-style: none;
`;
const List = ({values, handleKeys,separator ,handleValue}) => {

    return (

        <ListStyled>
            {
                values.map(value =>{
                    return <li>{handleKeys(value)} {separator} {handleValue(value)}</li>
                })
            }
        </ListStyled>
    );
};

export default List;
