import React from 'react'
import MainContainer from '../containers/mainContainer'

const Senses = (props) => {
	const inputArray = []
	for (var i = 0; i < props.number; i++) {
		inputArray.push(<><input /><br/></>)
	}
	return (
		<MainContainer>
			<h1>{props.headline}</h1>
			<form>
				{inputArray.map(input => {
					return input
				})}
			</form>
		</MainContainer>
	)
}

export default Senses
