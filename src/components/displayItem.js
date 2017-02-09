import React from 'react';
import ItemPicker from './itemPicker';


class DisplayItem extends React.Component{



  render(){
    console.log(this.props)
    // debugger
    this.props.items.filter(item => <ItemPicker recipe={item} />)
    return (
      <div>
      <h1>Were good to go</h1>
      <ItemPicker />
      </div>
    )
  }
}

export default DisplayItem;
