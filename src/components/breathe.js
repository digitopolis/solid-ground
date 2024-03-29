import React from 'react'
// import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const Breathe = ({ advance, prompt }) => {
	return (
		<div className='container' onClick={advance}>
			<Circle />
			<Footer>{prompt}</Footer>
		</div>
	)
}

export default Breathe

const breatheAnimation = keyframes`
	0% { height: 100px; width: 100px; }
	30% { height: 400px; width: 400px; opacity: 1 }
	40% { height: 405px; width: 405px; opacity: 0.3; }
	100% { height: 100px; width: 100px; opacity: 0.6; }
`

const fadeIn = keyframes`
	0% { opacity: 0; }
	90% { opacity: 0; }
	100% { opacity: 1; }
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
	animation-name: ${fadeIn};
	animation-duration: 15s;
	animation-duration-count: 1;
`
