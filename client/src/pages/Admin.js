import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import CreateBook from '../components/modals/CreateBook';
import CreateGenre from '../components/modals/CreateGenre';
import CreatePublisher from '../components/modals/CreatePublisher';
import CreateAuthor from '../components/modals/CreateAuthor';
import CreateType from '../components/modals/CreateType';
import DeletePublisher from '../components/modals/deletes/DeletePublisher'
import DeleteType from '../components/modals/deletes/DeleteType';
import DeleteGenre from '../components/modals/deletes/DeleteGenre';
import DeleteAuthor from '../components/modals/deletes/DeleteAuthor';
import CreateAge from '../components/modals/CreateAge';
import CreateLanguage from '../components/modals/CreateLanguage';
import DeleteAge from '../components/modals/deletes/DeleteAge';
import DeleteLanguage from '../components/modals/deletes/DeleteLanguage';
import CreateRating from '../components/modals/CreateRating';
import DeleteRating from '../components/modals/deletes/DeleteRating';
import DeleteBook from '../components/modals/deletes/DeleteBook';


const Admin = () =>{

  const [genreVisible, setGenreVisible] = useState(false)
  const [bookVisible, setBookVisible] = useState(false)
  const [publisherVisible, setPublisherVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [authorVisible, setAuthorVisible] = useState(false)
  const [ageVisible, setAgeVisible] = useState(false)
  const [languageVisible, setLanguageVisible] = useState(false)
  const [ratingVisible, setRatingVisible] = useState(false)
  
  const [bookHide, setBookDel] = useState(false)
  const [publisherHide, setPublisherDel] = useState(false)
  const [typeHide, setTypeDel] = useState(false)
  const [genreHide, setGenreDel] = useState(false)
  const [authorHide, setAuthorDel] = useState(false)
  const [ageHide, setAgeDel] = useState(false)
  const [languageHide, setLanguageDel] = useState(false)
  const [ratingHide, setRatingDel] = useState(false)
  
  return (
 
    <Container className ="d-flex flex-column">
      <h2 align="center">Добавление</h2>
      <Button 
        variant ={"otline-dark"}
        className='mt-4 p-2'
        onClick={() => setBookVisible(true)}
        >
        Добавить произведение
        </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setGenreVisible(true)}
       >
        Добавить жанр
        </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setPublisherVisible(true)}
       >
        Добавить издательство
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setAuthorVisible(true)}
       >
        Добавить автора
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setTypeVisible(true)}
       >
        Добавить тип
      </Button>
      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setAgeVisible(true)}
       >
        Добавить возрастной рейтинг
      </Button>
      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setLanguageVisible(true)}
       >
        Добавить язык книги
      </Button>
      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setRatingVisible(true)}
       >
        Добавить рейтинг
      </Button>
       <h2 align="center">Удаление</h2>
       <Button 
        variant ={"otline-dark"}
        className='mt-4 p-2'
        onClick={() => setBookDel(true)}
        >
        Удалить произведение
        </Button>

        <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setGenreDel(true)}
       >
        Удалить жанр
        </Button>

        <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setPublisherDel(true)}
       >
        Удалить издательство
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 p-2'
       onClick={()=> setAuthorDel(true)}
       >
        Удалить автора
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setTypeDel(true)}
       >
        Удалить тип
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setAgeDel(true)}
       >
        Удалить возрастной рейтинг
      </Button>

      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setLanguageDel(true)}
       >
        Удалить язык
      </Button>
      <Button
       variant ={"otline-dark"}
       className='mt-4 mb-4 p-2'
       onClick={()=> setRatingDel(true)}
       >
        Удалить рейтинг
      </Button>
      <CreatePublisher show={publisherVisible} onHide={() =>setPublisherVisible(false)}/>
      <CreateBook show={bookVisible} onHide={() =>setBookVisible(false)}/>
      <CreateGenre show={genreVisible} onHide={() =>setGenreVisible(false)}/>
      <CreateType show={typeVisible} onHide={() =>setTypeVisible(false)}/>
      <CreateAuthor show={authorVisible} onHide={() =>setAuthorVisible(false)}/>
      <CreateAge show={ageVisible} onHide={() =>setAgeVisible(false)}/>
      <CreateLanguage show={languageVisible} onHide={() =>setLanguageVisible(false)}/>
      <CreateRating show={ratingVisible} onHide={() =>setRatingVisible(false)}/>
      <DeletePublisher show={publisherHide} onHide={()=>setPublisherDel(false)}/>
      <DeleteType show={typeHide} onHide={()=>setTypeDel(false)}/>
      <DeleteGenre show={genreHide} onHide={()=>setGenreDel(false)}/>
      <DeleteAuthor show={authorHide} onHide={()=>setAuthorDel(false)}/>
      <DeleteAge show={ageHide} onHide={()=>setAgeDel(false)}/>
      <DeleteLanguage show={languageHide} onHide={()=>setLanguageDel(false)}/>
      <DeleteRating show={ratingHide} onHide={()=>setRatingDel(false)}/>
      <DeleteBook show={bookHide} onHide={()=>setBookDel(false)}/>
    </Container>
  );
};

export default Admin;
