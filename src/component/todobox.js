import Table from 'react-bootstrap/Table';
import "./todo.css"
import {Container , Row, Col} from 'react-bootstrap'  
function Todo(){
    return (


      <div className="App">  
      <Container>  
      <Row className="bg-primary m-5 p-5">  
        <Col>To Do List</Col>  

      </Row>  
    </Container>  
    <Container>  
      <Row className="bg-primary m-5 p-5">  
        <Col>Processing</Col>  
      </Row>  
    </Container>  
    <Container>  
      <Row className="bg-primary m-5 p-5">  
        <Col>Done</Col>  
      </Row>  
    </Container>  
      </div>  
    );  
    //     <div className="container">
    //       <thread>
    //         <tr>  <Table striped bordered hover></Table>
    //         <th>#</th>
    //       <th>ToDoList</th>
    //       <th>processing</th>
    //       <th>Done</th>

    //         </tr>
    //       </thread>
    //             </div>
    // )
}
export default Todo