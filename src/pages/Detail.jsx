import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import Tag from "../components/Tag";
import List from "../components/List";
import Button from "../components/Button";
import {useNavigate} from "react-router-dom";
import {pokemon} from "../redux/actions";

const DetailWrapper = styled.div`
  grid-area: main;
  width: 100%;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direcction || "column"};
  justify-content: ${props => props.justifyContent || "center"};
  text-align: ${props => props.textAlign || "justify"};;
`;

const Detail = () => {

    const {actualPokemon} = useSelector(state => state.main);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // TODO
    // - Add a handle Loading state
    //
    const {name, height, weight, abilities, stats, id} = actualPokemon;
    const handleAbilities = (value) => {
        return value.ability.name
    }
    const handleValueAbilitie= () => {
        return ''
    }
    const handleStat = (value) =>{
        return value.stat.name
    }
    const handleValueStat = (value) =>{
        return value.base_stat
    }
    const handleBack = ()=>{
        console.log("asd")
        dispatch(pokemon.handleReturn);
        navigate(`/`);
    }
    return (
        <DetailWrapper>
            <Button text="back" handleClick={handleBack}/>

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
                    <h1>Stats</h1>
                    <List
                        values={stats}
                        handleKeys={handleStat}
                        separator =':'
                        hasProgress={true}
                        handleValue={handleValueStat} />
                </div>
                <div className="detail_abilities">
                    <h1>Abilities</h1>
                    <List
                        values={abilities}
                        handleKeys={handleAbilities}
                        separator =''
                        handleValue={handleValueAbilitie}/>
                </div>
            </Wrapper>
        </DetailWrapper>
    );
};

export default Detail;
