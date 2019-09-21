import React from 'react'
// import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import MainContainer from '../containers/mainContainer'

const Breathe = () => {
	return (
		<MainContainer>
			<h1>Breathing exercise</h1>
			<Circle />
			<Footer>footer</Footer>
		</MainContainer>
	)
}

export default Breathe

const breatheAnimation = keyframes`
	0% { height: 100px; width: 100px; }
	30% { height: 400px; width: 400px; opacity: 1 }
	40% { height: 405px; width: 405px; opacity: 0.3; }
	100% { height: 100px; width: 100px; opacity: 0.6; }
`

const Circle = styled.div`
	height: 100px;
	width: 100px;
	border-style: solid;
	border-width:	5px;
	border-radius: 50%;
	border-color: black;
	animation-name: ${breatheAnimation};
	animation-duration: 8s;
	animation-iteration-count: infinite;
`

const Footer = styled.h2`
	position: fixed;
	bottom: 0;
`
