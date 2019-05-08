import React, { Component } from 'react'

const TableHeader = props => {
  const rows = props.characterHead.map((row, index) => {
      return (
        <tr key={index}>
          <th>{row.title1}</th>
          <th>{row.title2}</th>
          <th>{row.title3}</th>
        </tr>
      )
    })
  return (
    <thead>{rows}</thead>
  )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { characterData, characterHead, removeCharacter } = this.props

    return (
      <table>        
        <TableHeader characterHead={characterHead}/>
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table