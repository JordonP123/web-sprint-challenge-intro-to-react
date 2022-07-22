// Write your Character component here
import react from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
width: 45%;
margin: 0 auto;
border: 1px solid;
padding: 1%;
background-color: #1b1b1b;
`

const NamesStyles = styled.div`
display: inline;
border: 1 px solid black;
color: white;
font-size: 1.5rem;
margin:2%;
`

const NamesStyles2 = styled.div`
display: inline;
justify-content: flex-end;
border: 1 px solid black;
color: white;
font-size: 1.2rem;
margin:1%;
border: 1px solid white;
padding: 1%;
background-color: grey;
border-radius: 40px;
color: purple;
`

const Div = styled.div`
display:flex;
justify-content: space-between;
border: 2px solid green;
background-color: black;
height: 5vh;
margin-top: 1.5%;
`

const Character = props => {
    return(
       <StyledDiv>
        <Div>
        <NamesStyles>{props.people}</NamesStyles><NamesStyles2>{props.date}</NamesStyles2>
         </Div>
       </StyledDiv>
    )
}

export default Character




