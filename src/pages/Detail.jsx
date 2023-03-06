import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import Tag from "../components/Tag";

const DetailWrapper = styled.div`
  //width: 100vw;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direcction || "column"};
  justify-content: ${props => props.justifyContent || "center"};
  text-align: ${props => props.textAlign || "justify"};;
`;

const Detail = () => {
    const {actualPokemon} = useSelector(state => state.main);

    console.log(actualPokemon)
    const {name, height, weight, abilities, stats, id} = actualPokemon
    return (
        <DetailWrapper>
            <Wrapper textAlign="center">
                <p>Type</p>
                <p>Poison</p>
            </Wrapper>
            <Wrapper
                direcction="row"
                justifyContent="space-around">
                <Tag tagName="Number" tagValue={id}/>
                <Tag tagName="Name" tagValue={name}/>
                <Tag tagName="Height" tagValue={height}/>
                <Tag tagName="Weight" tagValue={weight}/>
            </Wrapper>
            <Wrapper
                direcction="row"
                justifyContent="space-around"
            >
                <div className="detail__info">
                    <ul>
                        {
                            abilities.map(abilitie => (
                                <li>{abilitie.ability.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="detail_abilities">
                    <ul>
                        {
                            stats.map(stat => (
                                <li>{stat.stat.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </Wrapper>
        </DetailWrapper>
    );
};

export default Detail;
