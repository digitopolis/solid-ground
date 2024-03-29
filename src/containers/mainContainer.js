import React from 'react'
import styled from 'styled-components'

const mainContainer = (props) => {
	return (
		<Container>{props.children}</Container>
	)
}

export default mainContainer

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: 500px;
`
