import React from 'react'
import MainContainer from '../containers/mainContainer'
import styled from 'styled-components'

const Senses = ({ number, step, headline, advance }) => {
	const inputArray = []
	for (var i = 0; i < number; i++) {
		inputArray.push(<><input key={step + i} defaultValue='' /><br/></>)
	}
	return (
		<MainContainer>
			<h1>{headline}</h1>
			<form>
				{inputArray.map(input => {
					return input
				})}
				<Button onClick={advance}>{number === 1 ? 'Start Over' : 'Continue' }</Button>
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
