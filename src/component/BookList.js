import React from 'react'
import Item from './Item';
import styled from 'styled-components';

const BookList =({list})=>{

    return(
        
        <div>
           
        {list.map((it) => (
          <Item
            key={it.id}
            {...it}
            item={it}
          />
        ))}
 
        </div>
     
    )
}

export default BookList;

