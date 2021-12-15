import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import Form from "react-bootstrap/Form"
import { createPublisher } from "../../http/bookApi";
import { useState } from "react";

const CreatePublisher = ({show, onHide}) =>{

  const [value,setValue]= useState('')

  const addPublisher =()=>{
      createPublisher({name:value}).then(data=>{
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
          Добавить издательство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value={value}
                onChange={e =>setValue(e.target.value)}
                placeholder={"Введите название издательства"}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addPublisher}>Добавить</Button>
      </Modal.Footer>
    </Modal>

    );

};

export default CreatePublisher;