import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card'

const PublisherBar = observer(() =>{

    const {book}=useContext(Context)

  return (
    <Row className="d-flex">
        {book.publishers.map(publisher =>
            
            <Card
                style={{cursor: 'poineter'}}
                key={publisher.id}
                className="p-3"
                onClick={()=>book.setSelectedPublisher(publisher)}
                border={publisher.id === book.selectedPublisher.id ? 'danger' : 'light'}
            >
                {publisher.name}
            </Card>
            
            )}

    </Row>
  );
});

export default PublisherBar;