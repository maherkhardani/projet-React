import React from "react";
import Form from 'react-bootstrap/Form';
import './Reser.css';

import Button from "@restart/ui/esm/Button";
function Reser() {
    return (
        <div>
<Form>
      <Form.Control placeholder="First name" />
      <Form.Control placeholder="Last name" />
      <Form.Control size="lg" type="text" placeholder="CIN" />
      <Form.Control size="lg" type="text" placeholder="number phone" />
</Form>
<>
  <Form.Select size="lg">
    <option>city</option>
    <option>touzeur</option>
    <option>hamamet</option>
    <option>sousse</option>
  </Form.Select>
  <br />
  <Form.Select>
    <option>hotel</option>
    <option>Marhaba</option>
    <option>coucou</option>
  </Form.Select>
  <br />
  <Form.Select size="sm">
    <option>chambre</option>
    <option>chambre for one</option>
    <option>chambre for two</option>
  </Form.Select>
  <Form.Control size="lg" type="text" placeholder="numbers days" />
</>
<Button variant="primary" type="submit">
    Submit
  </Button>
        </div>
    )
}
export default Reser;