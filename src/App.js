import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './seed_data/menu_items';
import DisplayItem from './components/displayItem';
import AddRecipeForm from './components/addRecipeForm';

class App extends Component {

  constructor(){
    super();

    this.state={
      recipes: Items.getAll(),
      recipeName:""
    }
    this.ChangeRecipeName = this.ChangeRecipeName.bind(this);
    this.SubmitForm = this.SubmitForm.bind(this);
  }

  SubmitForm(){
    debugger
    // this.setState({
    //   recipes: [...this.state.recipes, ]
    // })
  }

  ChangeRecipeName(input){
    this.setState({
      recipeName: input
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DisplayItem items={this.state.recipes} />
        <AddRecipeForm changeName={this.ChangeRecipeName} submitForm={this.SubmitForm} currentName={this.state.recipeName}/>
      </div>
    );
  }
}

export default App;
