import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/Row'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router';
import { fetchOneBook } from '../http/bookApi';
import { BASKET_ROUTE } from '../utils/consts';
import { useHistory } from 'react-router-dom';

const BookPage = () =>{

  const history =useHistory()
 const [book, setBook]= useState({info:[]})
  const {id} = useParams()
  
 useEffect( ()=>{
  fetchOneBook(id).then(data=>setBook(data))
 }, [])

  return (
    <Container className="mt-10">
      <Row>
        <Col md={4}>
          <Image width={300} heigth={300} src={process.env.REACT_APP_API_URL+book.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column aling-items-center">
              <h2>{book.name}</h2>
              <div
              className="d-flex aling-items-center justify-content-center"
              style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'Cover', fontSize:60}}
              >
                 {book.rating}
              </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex-column align-items-center justify-content-around"
            style={{width:300, heigth:300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>{book.price}{' '}{'р'}</h3>
            <Button 
            variant={"outline-dark"}
            onClick={()=> history.push(BASKET_ROUTE)}
            >
             Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Параметры</h1>
        
      </Row>
    </Container>
  );
};

export default BookPage;
