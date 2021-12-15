import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context }  from "../index"
import ListGroup from "react-bootstrap/ListGroup"

const AgeBar = observer(() =>{
    
  const {book}=useContext(Context)

  return (
    <ListGroup>
        {book.ages.map(age =>
            <ListGroup.Item 
                active={age.id === book.selectedAge.id}
                onClick={() => book.setSelectedAge(age)}
                key={age.id}
            >
                {age.name}
            </ListGroup.Item>
            )}
    </ListGroup>
  );
});

export default AgeBar;