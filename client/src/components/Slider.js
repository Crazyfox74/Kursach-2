import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import book_shelf from '../assets/books_1.png';
import book_sale from '../assets/book_sale.jpg';

export default function Slider () {
    return(

        <Carousel>
            <CarouselItem style={{'height': "600px"}}>
                <img
                 className="d-block w-100"
                 src={book_shelf}
                 alt="Книжная полка"
                 />
                <Carousel.Caption>
                    <h3><font color="red">Книжная полка</font></h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem style={{'height': "600px"}}>
                <img
                 className="d-block w-100"
                 src={book_sale}
                 alt="Распродажа книг"
                 />
                <Carousel.Caption>
                    <h3><font color="red">Распродажа книг</font></h3>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>

    )
}