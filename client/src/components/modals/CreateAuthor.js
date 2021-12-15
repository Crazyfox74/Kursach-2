import React from "react";
import Modal from "react-bootstrap/Modal"
import Button  from "@restart/ui/esm/Button";
import CreatePublisher from "./CreatePublisher";
import Form from "react-bootstrap/Form"
import { createAuthorSurname, createAuthorName, createAuthor } from "../../http/bookApi";
import { useState } from "react";
import { setUncaughtExceptionCaptureCallback } from "process";


const CreateAuthor = ({show, onHide}) => {

  const [name,setNameValue]= useState('')
  const [surname,setSurnameValue]= useState('')
  
  const addAuthor= () =>{
    const formData=new FormData()
    formData.append('Author_Name',name)
    formData.append('Author_Surname',surname)
    createAuthor(formData).then(data=>onHide())
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
          Добавить автора
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value={name}
                className="mt-3"
                onChange={e =>setNameValue(e.target.value)}
                placeholder={"Введите имя автора"}
              />
          </Form>
          <Form>
              <Form.Control
                value={surname}
                className="mt-3"
                onChange={e =>setSurnameValue(e.target.value)}
                placeholder={"Введите фамилию автора"}
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addAuthor}>Добавить</Button>
      </Modal.Footer>
    </Modal>

    );

};

export default CreateAuthor;