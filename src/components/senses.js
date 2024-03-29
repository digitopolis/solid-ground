import React from 'react'
import MainContainer from '../containers/mainContainer'
import styled from 'styled-components'

const Senses = ({ inputs, step, headline, advance }) => {
	const inputArray = []
	for (var i = 0; i < inputs; i++) {
		inputArray.push(<><input key={step + i} defaultValue='' /><br/></>)
	}
	return (
		<MainContainer>
			<h1>{headline}</h1>
			<form>
				{inputArray.map(input => {
					return input
				})}
				<Button onClick={advance}>{inputs === 1 ? 'Finish' : 'Continue' }</Button>
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
