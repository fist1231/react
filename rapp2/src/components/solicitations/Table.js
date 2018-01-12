import React, { Component } from 'react'

class Table extends React.Component {
  render() {

    const rows = [];
    let lastSearch = null;

    this.props.solicitations.forEach((solicitation) => {
      if (solicitation.acronym !== lastSearch) {
        rows.push(
          <tr key={solicitation.id}>
            <td>{solicitation.id}</td>
            <td>{solicitation.acronym}</td>
            <td>{solicitation.title}</td>
          </tr>
        );
      } else {
        rows.push(
          <tr key={solicitation.id}>
            <td>{solicitation.id}</td>
            <td>{solicitation.acronym}</td>
            <td>{solicitation.title}</td>
          </tr>
        );
      }
      lastSearch = solicitation.acronym;
    });

    {/*
    const Table = () => (
    */}
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Acronym</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default Table;

    {/*
    )

export default Table;
*/}
