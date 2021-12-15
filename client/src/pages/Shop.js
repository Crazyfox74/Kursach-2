import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import BookList from '../components/BookList';
import PublisherBar from '../components/PublisherBar';
import TypeBar from '../components/TypeBar';
import GenerBar from '../components/GenerBar';
import AuthorBar from '../components/AuthorsBar';
import LanguageBar from '../components/LanguageBar';
import AgeBar from '../components/AgeBar';
import RatingBar from '../components/RatingBar';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchGenre, fetchPublisher, fetchTypes, fetchAuthor, fetchBooks, fetchAges, fetchLanguages, fetchRatings } from '../http/bookApi';

const Shop = observer(() =>{

  const {book}=useContext(Context)

  useEffect( ()=> {
    fetchTypes().then(data=>book.setTypes(data))
    fetchGenre().then(data=>book.setGeners(data))
    fetchPublisher().then(data=>book.setPublishers(data))
    fetchAuthor().then(data=>book.setAuthors(data))
    fetchAges().then(data=>book.setAges(data))
    fetchLanguages().then(data=>book.setLanguages(data))
    fetchBooks().then(data=>book.setBooks(data.rows))
    fetchRatings().then(data=>book.setRatings(data))
  }, [])

  return (
    <Container>
      <Row clasName="mt-2">
        <Col md={3}>
          <h2>Типы</h2>
          <TypeBar/>
          <h2>Жанры</h2>
          <GenerBar/>
          <h2>Авторы</h2>
          <AuthorBar/>
          <h2>Языки</h2>
          <LanguageBar/>
          <h2>Возрасты</h2>
          <AgeBar/>
          <h2>Рейтинги</h2>
          <RatingBar/>
        </Col>
        <Col md={9}>
          <h2>Издательства</h2>
          <PublisherBar/>
          <BookList/>
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
