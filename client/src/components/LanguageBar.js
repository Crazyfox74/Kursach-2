import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context }  from "../index"
import ListGroup from "react-bootstrap/ListGroup"

const LanguageBar = observer(() =>{
    
  const {book}=useContext(Context)

  return (
    <ListGroup>
        {book.languages.map(language =>
          
            <ListGroup.Item 
                
                active={language.id === book.selectedLanguage.id}
                onClick={() => book.setSelectedLanguage(language)}
                key={language.id}
            >
                {language.name}
            </ListGroup.Item>
            )}
    </ListGroup>
  );
});

export default LanguageBar;