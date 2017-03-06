import React from 'react';



class ItemPicker extends React.Component{
  render(){

    return(
      <div>
        <h2>{this.props.item.name}</h2>
      </div>
    )
  }


}

export default ItemPicker;
