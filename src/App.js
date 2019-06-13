import React, { Component } from 'react';
import './App.css';


//importing components:
import Form from './components/Form'
import Recipes from './components/Recipes'

const api_key="f39b77adf0514badcf2fc13d45963b2e";
//the URL is :  http://food2fork.com/api/search?key={API_KEY}&q=shredded%20chicken

class App extends Component {
  state={
    recipes : [],
  }


getRecipe = async (event) =>{
  const recipeName = event.target.elements.recipeName.value;
  event.preventDefault();
// I had to add https://cors-anywhere.herokuapp.com/ before the api URL because some api servers do not allow localhost call so with this we trick these type of servers
  const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://food2fork.com/api/search?key=${api_key}&q=${recipeName}`);
  const data = await api_call.json();
  console.log(data);
  this.setState({recipes:data.recipes});
  console.log(this.state.recipes)
}


  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;