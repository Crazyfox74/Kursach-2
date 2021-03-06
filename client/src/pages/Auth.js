import React, { useContext } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import Button from '@restart/ui/esm/Button';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import Row from "react-bootstrap/Row";
import { registration } from '../http/userApi';
import {login} from '../http/userApi'
import { useState } from 'react';
import {observer} from "mobx-react-lite"
import {Context} from "../index"

const Auth = observer(() =>{

  const {user}=useContext(Context)
  const location =  useLocation()
  const history= useHistory()
  const isLogin =location.pathname === LOGIN_ROUTE
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
 

  const click = async () =>{
    try{
    let data;
    if (isLogin) {
      data = await login(email,password);
    } else {
      data = await registration(email,password);
      
    }
    user.setUser(user)
    user.setIsAuth(true)
    console.log(user)
    console.log(user.setUser(user))
    history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  return (
    <Container 
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight -54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
       <Form className="d-flex flex-column">
          <Form.Control
              className="mt-3"
              placeholder="Введите e-mail"
              value={email}
              onChange={e=>setEmail(e.target.value)}
          />
          <Form.Control
              className="mt-3"
              placeholder="Введите пароль"
              value={password}
              onChange={e=>setPassword(e.target.value)}
              type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3">
            {isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} >Зарегистрируйтесь!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} >Войдите!</NavLink>
              </div>
            }
           <Button 
            variant={"outline-success"}
            onClick={click}
            >
            {isLogin ? 'Войти' : 'Регистрация'}
           </Button>
          </Row>
       </Form>
      </Card>
    </Container>
  );
});

export default Auth;
