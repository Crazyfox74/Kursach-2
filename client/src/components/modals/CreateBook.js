import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import { Context } from '../../index'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { useEffect } from "react";
import { fetchTypes, fetchGenre, fetchPublisher, fetchAuthor, createBook, fetchAges, fetchRatings, fetchLanguages } from "../../http/bookApi";
import { observer } from "mobx-react-lite";

const CreateBook = observer(({show,onHide}) => {

  const {book}=useContext(Context)

  const [name,setName]=useState('')
  const [price,setPrice]=useState(0)
  const [file,setFile]=useState(null)
  const [info,setInfo] = useState([])

  useEffect( ()=> {
    fetchTypes().then(data=>book.setTypes(data))
    fetchGenre().then(data=>book.setGeners(data))
    fetchPublisher().then(data=>book.setPublishers(data))
    fetchAuthor().then(data=>book.setAuthors(data))
    fetchAges().then(data=>book.setAges(data))
    fetchRatings().then(data=>book.setRatings(data))
    fetchLanguages().then(data=>book.setLanguages(data))
  }, [])

  const addInfo = () => {
    setInfo( [...info, {title: '', description: '' ,number: 'Date.now()'}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const selectFile=e=>{
    setFile(e.target.files[0])
  }

  const addBook= () =>{
    const formData=new FormData()
    formData.append('name',name)
    formData.append('price',`${price}`)
    formData.append('img',file)
    formData.append('publisherId',book.selectedPublisher.id)
    formData.append('typeId',book.selectedType.id)
    formData.append('genreId',book.selectedGener.id)
    formData.append('authorId',book.selectedAuthor.id)
    formData.append('ratingId',book.selectedRating.id)
    formData.append('ageId',book.selectedAge.id)
    formData.append('languageId',book.selectedLanguage.id)
    createBook(formData).then(data=>onHide())
  }
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить произведение
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.types.map(type =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedType(type)}
                          key ={type.id}>{type.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedPublisher.name || "Выберите издательство"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.publishers.map(publisher =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedPublisher(publisher)}
                          key ={publisher.id}>{publisher.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedAge.name || "Выберите возрастной рейтинг"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.ages.map(age =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedAge(age)}
                          key ={age.id}>{age.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedLanguage.name || "Выберите язык произведения"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.languages.map(language =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedLanguage(language)}
                          key ={language.id}>{language.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedRating.rating_value || "Выберите рейтинг книги"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.ratings.map(rating =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedRating(rating)}
                          key ={rating.id}>{rating.rating_value}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedGener.name || "Выберите жанр"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.geners.map(gener =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedGener(gener)}
                          key ={gener.id}>{gener.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedAuthor.author_name && book.selectedAuthor.author_surname|| "Выберите автора"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.authors.map(author =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedAuthor(author)}
                          key ={author.id}>{author.Author_Name} {' '} {author.Author_Surname}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                value={name}
                onChange={e=>setName(e.target.value)}
                className="mt-3"
                placeholder="Введите название произведения"
              />
              <Form.Control
                value={price}
                onChange={e=>setPrice(Number(e.target.value))}
                className="mt-3"
                placeholder="Введите стоимость произведения"
                type="number"
              />
              <Form.Control
                className="mt-3"
                type="file"
                onChange={selectFile}
              />
              <hr/>
              <Button
               variant={"outline-dark"}
               onClick={addInfo}
              >
                Добавить новой свойство
              </Button>
              {
                  info.map(i=>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                          <Form.Control
                              placeholder="Введите название свойства"
                          />
                        </Col>
                        <Col md={4}>
                          <Form.Control
                            placeholder="Введите описание свойства"
                          />
                        </Col>
                        <Col md={4}>
                          <Button
                           onClick={()=> removeInfo(i.number)}
                           variant={"outline-danger"}
                           
                          >
                             Удалить
                          </Button>
                        </Col>
                    </Row>  
                  )
              }
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addBook}>Добавить</Button>
      </Modal.Footer>
    </Modal>


    );

});

export default CreateBook;