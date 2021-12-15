import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { useState, useContext ,useEffect} from "react";
import {deleteLanguage, deletePublisher, fetchPublisher} from "../../../http/bookApi"
import { observer } from "mobx-react-lite";
import { Context } from '../../../index'
import Dropdown from "react-bootstrap/Dropdown"

const DeleteLanguage = observer(({show, onHide}) =>{

  const {book}=useContext(Context)

  const [publisher,setPublisher]=useState(null)
  const delLanguage =()=>{
      deleteLanguage(book.selectedLanguage.id).then(data=>{
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
          Удалить язык книги
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedLanguage.name || "Выберите язык для удаления"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.languages.map(language =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedLanguage(language)}
                          key ={language.id}>{language.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delLanguage}>Удалить</Button>
      </Modal.Footer>
    </Modal>

    );

});

export default DeleteLanguage;