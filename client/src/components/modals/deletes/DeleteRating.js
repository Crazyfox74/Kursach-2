import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { useState, useContext ,useEffect} from "react";
import {deletePublisher, deleteRating, fetchPublisher} from "../../../http/bookApi"
import { observer } from "mobx-react-lite";
import { Context } from '../../../index'
import Dropdown from "react-bootstrap/Dropdown"

const DeleteRating = observer(({show, onHide}) =>{

  const {book}=useContext(Context)

  const [publisher,setPublisher]=useState(null)
  const delRating =()=>{
      deleteRating(book.selectedRating.id).then(data=>{
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
          Удалить рейтинг
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
          <Dropdown className="mt-2 mb-2">
                  <Dropdown.Toggle>{book.selectedRating.rating_value || "Выберите рейтинг для удаления"}</Dropdown.Toggle>
                  <Dropdown.Menu>
                        {book.ratings.map(rating =>
                          <Dropdown.Item 
                          onClick={()=>book.setSelectedRating(rating)}
                          key ={rating.id}>{rating.rating_value}
                          </Dropdown.Item>
                          )}
                  </Dropdown.Menu>
              </Dropdown>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={delRating}>Удалить</Button>
      </Modal.Footer>
    </Modal>

    );

});

export default DeleteRating;