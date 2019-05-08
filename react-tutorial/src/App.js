import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

	state = {
		characters: [],
	}

	removeCharacter = index => {
	  const { characters } = this.state

	  this.setState({
	    characters: characters.filter((character, i) => {
	      return i !== index
	    }),
	  })
	}

	handleSubmit = character => {
		this.setState({ characters: [...this.state.characters, character] })
	}

  render() {

  	const characters_head = [
      {
        title1: 'Name',
        title2: 'Job',
        title3: 'Action',
      }
    ]

	const { characters } = this.state

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData={characters} characterHead={characters_head} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App