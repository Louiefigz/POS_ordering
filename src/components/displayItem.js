import React from 'react';
import ItemPicker from './itemPicker';


class DisplayItem extends React.Component{



  render(){
// ES6 format
  const items = this.props.items.map((item, index) => (
          <ItemPicker item={item} key={index}  />
        ));
  // es2015 format below also works. 
  // const items = this.props.items.map(function(item, index){
  //       return <ItemPicker item={item} key={index}/>
  //     })

    return (
      <div>
      <h1>Were good to go</h1>
      {items}
      </div>
    )
  }
}

export default DisplayItem;
