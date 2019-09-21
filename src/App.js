import React from 'react';
// import './App.css';
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
