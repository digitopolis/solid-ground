import React from 'react'
import MainContainer from '../containers/mainContainer'
import styled from 'styled-components'

const See = () => {
	return (
		<MainContainer>
			<h1>Identify FIVE things you can see around you.</h1>
			<form>
				<Input /><br/>
				<Input /><br/>
				<Input /><br/>
				<Input /><br/>
				<Input /><br/>
			</form>
		</MainContainer>
	)
}

export default See

const Input = styled.input`
	font-size: 1em;
	border: 2px solid black;
	border-radius: 3px;
	width: 300px;
	padding: .5em;
	margin: 1em;
`
