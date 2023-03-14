import React, { useEffect, useState,useRef } from 'react';
import Draggable from 'react-draggable';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import "./todo.css"


function TodoList() {
  const [todo, setTodo] = useState('');
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [status,setStatus]=useState("")
  const [todos, setTodos] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setComplete] = useState([]);
  const [id,setId]=useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const inputRef = useRef();
  const inputRefOne=useRef()

  const handleDrag = (e, { x, y }) => {
    setPosition({ x, y });
  };

  const handleStop = (e, { x, y }) => {
    setPosition({ x, y });
    inputRef.current.value = e.srcElement.innerText;

    axios.put(`http://localhost:3001/update`,{status:"In-Progress",description:description})       ///word here
    .then((e)=>{console.log(e.data)})
   
  };

  const handleStopone = (e, { x, y }) => {
    setPosition({ x, y });
    inputRefOne.current.value = e.srcElement.innerText;

    axios.put(`http://localhost:3001/update`,{status:"Completed",description:description})       ///word here
    .then((e)=>{console.log(e.data)})
   
  };



  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, description]);
    setPending([...pending,useRef])
    setComplete([...completed,useRef])
    setTodo('');
    // setPending("")
    // setComplete("")
    setStatus("Open")
    let data={
      title:title,
      description:description,
      status:status
    }
    axios.post("http://localhost:3001/createtask",data).then((data)=>{alert("new task added to queue")})
  };




  return (
    <Container className='abc'>
      <Row>
        <Col className='container'>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="todo">
              <Form.Label className='text'>Add a to-do:</Form.Label>
            <Form.Control type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
              <Form.Control type="text" value={description} onChange={(event) => setDescription(event.target.value)} />

            </Form.Group>
            <Button variant="primary" type="submit">
              Add
            </Button>
            <ListGroup>


              {todos.map((description, index) => (
                <ListGroup.Item key={index}>

              <Draggable onDrag={handleDrag} onStop={handleStop}>
              <div>
                  {description}
                  </div>
              </Draggable>

                </ListGroup.Item>
                
              ))}
                  
              </ListGroup>

          </Form>





        </Col>
        {/* pending */}

        <Col>
        <Form.Group controlId="todo">
              <Form.Label className='text'>pending:</Form.Label>
              <Form.Control type="text" ref={inputRef} />
              <Button variant="primary" >
              pending
            </Button>
         
            </Form.Group>
            <ListGroup>


            {pending.map((inputRefOne, index) => (
              <ListGroup.Item key={index}>

            <Draggable onDrag={handleDrag} onStop={handleStopone}>
            <div>
                {inputRefOne}
                </div>
            </Draggable>

              </ListGroup.Item>
              
            ))}
    
      </ListGroup>
        </Col>

          {/* done */}

        <Col>
            <Form.Group controlId="todo">
              <Form.Label className='text'>Done:</Form.Label>
              <Form.Control type="text" ref={inputRef} />
              <Button variant="primary" >
              Done
            </Button>
            </Form.Group>
            <ListGroup>


          {completed.map((inputRef, index) => (
            <ListGroup.Item key={index}>

              {inputRef}

            </ListGroup.Item>
            
          ))}
              
          </ListGroup>


            </Col>
      </Row>

    </Container>
  );
}

export default TodoList;
