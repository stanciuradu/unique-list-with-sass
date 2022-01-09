// formular cu un input si trei butoane->deci este o clasa deaorece state-ul initial al inputului este un string gol initial
import React, { Component } from "react";
import "../components/AddUniqueForm.scss";

export class AddUniqueForm extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  // actualizarea state-ului din input
  handleUpdateText(event) {
    const newText = event.target.value;
    this.setState({ text: newText });
  }

  //crearea unei functii pentru submiterea formularului
  handleUpdateUniqueList(event) {
    // functia de prevenire a comportamentului default a formularului
    event.preventDefault();
    // crearea unui item unic
    const unique = {
      text: this.state.text,
    };
    // apelarea functiei de updateUniqueList care este pasata ca props din App.js
    this.props.updateUniques(unique);
    // resetarea state-ului dupa apasarea butonului
    this.setState({
      text: "",
    });
  }

  // apelarea functiei de stergere a intregii liste, fiind la fel, pasata ca si props din App.js
  handleDeletUniquesList(uniques) {
    this.props.deletUniques(uniques);
  }

  render() {
    console.log(this.state);
    return (
      <div className="add-unique-form">
        <form>
          <h3>Lista mea favorita de Itemu-uri !</h3>
          <input
            type="text"
            name="text"
            id="text"
            onChange={(event) => this.handleUpdateText(event)}
            value={this.state.text}
            placeholder="Introduceti un item"
          />
          <input
            type="button"
            value="Add Item"
            onClick={(event) => this.handleUpdateUniqueList(event)}
          />
          <input type="button" value="Remove Item" />
          <input
            type="button"
            value="Clear Items"
            onClick={(uniques) => this.handleDeletUniquesList(uniques)}
          />
        </form>
      </div>
    );
  }
}

export default AddUniqueForm;
