import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { useState, useContext ,useEffect} from "react";
import {deleteBook, deleteGenre, deletePublisher, fetchPublisher} from "../../../http/bookApi"
import { observer } from "mobx-react-lite";
import { Context } from '../../../index'
import Dropdown from "react-bootstrap/Dropdown"
import { generatePath } from "react-router-dom";

const DeleteBook = observer(({show, onHide}) =>{

  const {book}=useContext(Context)

  const [publisher,setPublisher]=useState(null)
  const delBook =()=>{
      deleteBook(book.selectedBook.id).then(data=>{
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
          Удалить произведение
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedBook.name || "Выберите произведение для удаления"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.books.map(book =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedBook(book)}
                          key ={book.id}>{book.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delBook}>Удалить</Button>
      </Modal.Footer>
    </Modal>

    );

});

export default DeleteBook;