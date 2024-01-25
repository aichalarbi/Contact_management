import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addContact } from '../redux/actions';

const AddContact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [showForm, setShowForm] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      fullName,
      email,
      phoneNumber,
      birthdate
    };
    dispatch(addContact(newContact));
    alert("Contact added");
    setShowForm(false);
    navigate("/"); 
  };

  return (
    <>
      {showForm && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="name" onChange={(e) => setFullName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number </Form.Label>
            <Form.Control type="tel" placeholder="number" onChange={(e) => setPhoneNumber(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Birthdate </Form.Label>
            <Form.Control type="date" placeholder="Date" onChange={(e) => setBirthdate(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/">
            <Button variant="danger">Cancel</Button>
          </Link>
        </Form>
      )}
    </>
  );
};

export default AddContact;
