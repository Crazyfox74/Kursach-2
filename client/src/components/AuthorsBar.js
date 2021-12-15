import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context }  from "../index"
import ListGroup from "react-bootstrap/ListGroup"

const AuthorBar = observer(() =>{
    
    const {book}=useContext(Context)

  return (
    <ListGroup>
        {book.authors.map(author =>
            <ListGroup.Item 
                active={author.id === book.selectedAuthor.id}
                onClick={() => book.setSelectedAuthor(author)}
                key={author.id}
            >
                {author.Author_Name}
                {' '}
                {author.Author_Surname}
            </ListGroup.Item>
            )}
    </ListGroup>
  );
});

export default AuthorBar;