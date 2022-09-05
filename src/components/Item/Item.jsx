import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({id, title, description, price, img}){
  return (

    <div className="d-flex justify-content-evenly">
    
    <Card className="m-2 p-1"style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={img} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Link to={`/item/${id}`}>
              <Button variant="primary">Ver Detalle</Button>
              </Link>
            </Card.Body>
          </Card>

        
        </div>
          
  );
}

export default Item

