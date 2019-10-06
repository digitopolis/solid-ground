import React from 'react'
import MainContainer from '../containers/mainContainer'
import styled from 'styled-components'

const Senses = (props) => {
	const inputArray = []
	for (var i = 0; i < props.number; i++) {
		inputArray.push(<><input key={i}/><br/></>)
	}
	return (
		<MainContainer>
			<h1>{props.headline}</h1>
			<form>
				{inputArray.map(input => {
					return input
				})}
				{props.number === 1 ? <Button>Start Over</Button> : <Button onClick={props.advance}>Continue</Button>}
			</form>
		</MainContainer>
	)
}

export default Senses

const Button = styled.button`
	background: black;
	color: white;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid black;
	border-radius: 3px;
`
