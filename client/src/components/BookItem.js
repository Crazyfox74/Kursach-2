import React from 'react';
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import { useHistory } from 'react-router';
import { BOOK_ROUTE } from '../utils/consts';
import star from "../assets/star.png"


const BookItem = ({book}) =>{

  const history =useHistory()

  

  return (
    <Col md={4} className={"mt-3"} onClick={()=>history.push(BOOK_ROUTE + '/'+book.id)}>
        <Card style={{width:150,cursor:'pointer'}} border={"light"}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL+book.img} />
            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
              <div>Ван Пис</div>
              <div className="d-flex align-items-center">
                  <div>{book.rating}</div>
                  <Image width={18} height={18} src={star}/>
              </div>
            </div>
            <div>{book.name}</div>
        </Card>
    </Col>
  );
};

export default BookItem;