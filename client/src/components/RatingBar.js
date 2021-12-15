import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context }  from "../index"
import ListGroup from "react-bootstrap/ListGroup"

const RatingBar = observer(() =>{
    
  const {book}=useContext(Context)

  return (
    <ListGroup>
        {book.ratings.map(rating =>
            <ListGroup.Item 
                active={rating.id === book.selectedRating.id}
                onClick={() => book.setSelectedRating(rating)}
                key={rating.id}
            >
                {rating.rating_value}
            </ListGroup.Item>
            )}
    </ListGroup>
  );
});

export default RatingBar;