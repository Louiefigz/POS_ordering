import React from 'react';


class AddRecipeForm extends React.Component {
constructor(){
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleSubmit(event){
  event.preventDefault();
  this.props.submitForm();
}
handleChange(event){
  this.props.changeName(event.target.value);
}


  render(){
    return (

    <div>
      <form>
        <input type="text"  onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    </div>
  )
  }
}

export default AddRecipeForm
