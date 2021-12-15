import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { useState, useContext ,useEffect} from "react";
import {deleteGenre, deletePublisher, fetchPublisher} from "../../../http/bookApi"
import { observer } from "mobx-react-lite";
import { Context } from '../../../index'
import Dropdown from "react-bootstrap/Dropdown"
import { generatePath } from "react-router-dom";

const DeleteGenre = observer(({show, onHide}) =>{

  const {book}=useContext(Context)

  const [publisher,setPublisher]=useState(null)
  const delGenre =()=>{
      deleteGenre(book.selectedGener.id).then(data=>{
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
          Удалить жанр
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedGener.name || "Выберите жанр для удаления"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.geners.map(gener =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedGener(gener)}
                          key ={gener.id}>{gener.name}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delGenre}>Удалить</Button>
      </Modal.Footer>
    </Modal>

    );

});

export default DeleteGenre;