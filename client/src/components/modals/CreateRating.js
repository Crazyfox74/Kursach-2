import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { createPublisher } from "../../http/bookApi";
import { useState } from "react";
import { createRating } from "../../http/bookApi";

const CreateRating = ({show, onHide}) =>{

  const [value,setValue]= useState('')

  const addRating =()=>{
      createRating({rating_value:value}).then(data=>{
        setValue('')
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
          Добавить рейтинг
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value={value}
                onChange={e =>setValue(e.target.value)}
                placeholder={"Введите рейтинг"}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addRating}>Добавить</Button>
      </Modal.Footer>
    </Modal>

    );

};

export default CreateRating;