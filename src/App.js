import React from 'react';
// import './App.css';
import DATA from './data.js'
import Senses from './components/senses'
import Breathe from './components/breathe'
import Intro from './components/intro'

class App extends React.Component {

	state = {
		number: 0,
		headlines: DATA.headlines
	}

	cycleContent = (event) => {
		event.preventDefault()
		if (this.state.number < 8) {
			const number = this.state.number + 1
			this.setState({ number })
		} else {
			console.log('start over');
		}
	}

	finishExercise = (event) => {
		event.preventDefault()
		const number = 7
		this.setState({ number })
	}

	startOver = (event) => {
		event.preventDefault()
		const number = 2
		this.setState({ number })
	}

	renderContent = () => {
		switch (this.state.number) {
			case 0:
				return <Intro advance={this.cycleContent} />
			case 1:
				return <Breathe
					advance={this.cycleContent}
					prompt={'Try to match your breath to the circle. Click anywhere to continue.'} />
			case 2:
				return <Senses
					headline={this.state.headlines.see}
					step={'see'}
					advance={this.cycleContent}
					inputs={5}/>
			case 3:
				return <Senses
					headline={this.state.headlines.touch}
					step={'touch'}
					advance={this.cycleContent}
					inputs={4}/>
			case 4:
				return <Senses
					headline={this.state.headlines.hear}
					step={'hear'}
					advance={this.cycleContent}
					inputs={3}/>
			case 5:
				return <Senses
					headline={this.state.headlines.smell}
					step={'smell'}
					advance={this.cycleContent}
					inputs={2}/>
			case 6:
				return <Senses
					headline={this.state.headlines.taste}
					step={'taste'}
					advance={this.finishExercise}
					inputs={1}/>
			case 7:
				return <Breathe
					advance={this.startOver}
					prompt={'Maintain focus on your breath for a few moments. Click anywhere to start over.'}/>
			default:
				return <h1>the end</h1>
		}
	}

	render() {
		return (
			<div className='main' >
				{this.renderContent()}
			</div>
		);
	}

}

export default App;
