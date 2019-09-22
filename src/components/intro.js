import React from 'react'
import MainContainer from '../containers/mainContainer'
import styled from 'styled-components'

const Intro = () => {
	return (
		<MainContainer>
			<TextContainer>
				<h1 className='content'>Anxiety is a common response our bodies have to stressful situations. </h1>
				<h1 className='content'>You might experience rapid heart rate, sweating, and shortness of breath. </h1>
				<h1 className='content'>This exercise can help you ground yourself in the present, and stop your mind from racing. </h1>
				<h1 className='content'>Click anywhere to start, and first focus on taking some slow, deep breaths. </h1>
			</TextContainer>
		</MainContainer>
	)
}

export default Intro

const TextContainer = styled.div`
	width: 60%;
	text-align: center;
	align-self: center;
`
