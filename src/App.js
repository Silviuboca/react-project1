import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      shadows: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ shadows: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { shadows, searchField } = this.state;
    const filteredShadows = shadows.filter((shadow) =>
      shadow.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters and Shadows</h1>
        <SearchBox placeholder="search shadows" handleChange={this.handleChange} />
        <CardList shadows={filteredShadows}></CardList>
      </div>
    );
  }
}

export default App;
