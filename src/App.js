import React from 'react';
// import './App.css';
import Touch from './components/touch'
import See from './components/see'
import Breathe from './components/breathe'
import Intro from './components/intro'

class App extends React.Component {

	state = {
		number: 0
	}

	cycleContent = () => {
		if (this.state.number < 4) {
			const number = this.state.number + 1
			this.setState({ number })
		} else {
			console.log('start over');
		}
	}

	renderContent = () => {
		switch (this.state.number) {
			case 0:
				return <Intro />
			case 1:
				return <Breathe />
			case 2:
				return <See />
			case 3:
				return <Touch />
			default:
				return <h1>the end</h1>
		}
	}

	render() {
		return (
			<div className='main' onClick={this.cycleContent}>
				{this.renderContent()}
			</div>
		);
	}

}

export default App;
