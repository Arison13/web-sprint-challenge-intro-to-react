// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
background-color: ${pr => pr.theme.white};
padding:10px;
font-size:20px;
width: 40%;
border-radius: 20px;
display: flex;
justify-content: center;
align-content: flex-start;
margin: 0 auto;
color: ${pr => pr.theme.primaryColor};
background: url('https://mcdn.wallpapersafari.com/medium/81/95/Z7D2q6.jpg');

`
const CharacterDiv = styled.div `
    margin: 20px;
    // text-shadow: 0px 1px white;
    color: yellow;
    border:1px solid green;
    padding:0px 25px;
    width:100%;
    display:flex;
    justify-content:space-between;
    
`
const DetailsSpan = styled.span `
   color: purple;
   text-shadow:0px 1px black;
`
const Character = props => {
    return (
    <ContainerDiv>
        <div>{
            props.characters !== null ? 
                props.characters.map((item, index) => {
                return <div>
                            <CharacterDiv key={index}> {item.name}
                                <DetailsSpan>{item.birth_year}</DetailsSpan> 
                            </CharacterDiv>
                        </div>})  
            :   
                ''}
        </div>


    </ContainerDiv>
    )
}

export default Character;