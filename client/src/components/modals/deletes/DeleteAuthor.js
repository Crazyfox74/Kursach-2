import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { useState, useContext ,useEffect} from "react";
import {deleteAuthor, deletePublisher, fetchPublisher} from "../../../http/bookApi"
import { observer } from "mobx-react-lite";
import { Context } from '../../../index'
import Dropdown from "react-bootstrap/Dropdown"

const DeleteAuthor = observer(({show, onHide}) =>{

  const {book}=useContext(Context)

  const [publisher,setPublisher]=useState(null)
  const delAuthor =()=>{
      deleteAuthor(book.selectedAuthor.id).then(data=>{
        onHide()
      })
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
          Удалить автора
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedAuthor.Author_Name && book.selectedAuthor.Author_Surname || "Выберите автора для удаления"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.authors.map(author =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedAuthor(author)}
                          key ={author.id}>{author.Author_Name} {' '} {author.Author_Surname}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delAuthor}>Удалить</Button>
      </Modal.Footer>
    </Modal>

    );

});

export default DeleteAuthor;