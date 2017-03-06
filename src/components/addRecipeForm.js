import React from 'react';


class AddRecipeForm extends React.Component {
constructor(){
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
handleSubmit(event){
  this.props.submitForm();
}
handleChange(event){
  this.props.changeName(event.target.value);
}


  render(){
    return (

    <div>
      <form onSubmit={this.handleSubmit()}>
        <input type="text"  onChange={this.handleChange} />
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
  }
}

export default AddRecipeForm
