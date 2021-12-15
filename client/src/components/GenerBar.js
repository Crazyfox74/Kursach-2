import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context }  from "../index"
import ListGroup from "react-bootstrap/ListGroup"

const GenerBar = observer(() =>{
    
  const {book}=useContext(Context)

  return (
    <ListGroup>
        {book.geners.map(gener =>
            <ListGroup.Item 
                active={gener.id === book.selectedGener.id}
                onClick={() => book.setSelectedGener(gener)}
                key={gener.id}
            >
                {gener.name}
            </ListGroup.Item>
            )}
    </ListGroup>
  );
});

export default GenerBar;