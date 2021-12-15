import React from 'react';
import Slider from '../components/Slider';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import book_shop_1 from '../assets/book_shop.jpg'
import Footer from '../components/Footer'
const Home = () =>{
  return (
    <>
     <Slider/>
     <Container>
        <Row>
           <Col md={7}>
              <img src={book_shop_1} height={400}/>
           </Col>
           <Col md={5}>
              <h2>Букинист</h2>
              <p>
                Добро пожаловать в наш букинистический магазин!
                Здесь можно любое произведение литературы на свой
                вкус и цвет.
              </p>
           </Col>
        </Row>
     </Container>
     <Footer/>
     </>
  );
};

export default Home;