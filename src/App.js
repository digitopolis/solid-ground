import React from 'react';
// import './App.css';
import DATA from './data.js'
// import Taste from './components/taste'
// import Smell from './components/smell'
// import Hear from './components/hear'
// import Touch from './components/touch'
import Senses from './components/senses'
import Breathe from './components/breathe'
import Intro from './components/intro'

class App extends React.Component {

	state = {
		number: 0,
		headlines: DATA.headlines
	}

	cycleContent = () => {
		if (this.state.number < 8) {
			const number = this.state.number + 1
			this.setState({ number })
		} else {
			console.log('start over');
		}
	}

	renderContent = () => {
		switch (this.state.number) {
			case 0:
				return <Intro advance={this.cycleContent} />
			case 1:
				return <Breathe advance={this.cycleContent} />
			case 2:
				return <Senses
					headline={this.state.headlines.see}
					advance={this.cycleContent}
					number={5}/>
			case 3:
				return <Senses
					headline={this.state.headlines.touch}
					advance={this.cycleContent}
					number={4}/>
			case 4:
				return <Senses
					headline={this.state.headlines.hear}
					advance={this.cycleContent}
					number={3}/>
			case 5:
				return <Senses
					headline={this.state.headlines.smell}
					advance={this.cycleContent}
					number={2}/>
			case 6:
				return <Senses
					headline={this.state.headlines.taste}
					advance={this.cycleContent}
					number={1}/>
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
