import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { updateContact } from '../redux/actions';

const EditContact = ({el}) => {
  const [fullName, setFullName] = useState(el.fullName);
  const [email, setEmail] = useState(el.email);
  const [phoneNumber, setPhoneNumber] = useState(el.phoneNumber);
  const [birthdate, setBirthdate] = useState(el.birthdate);
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const editedContact = {
      fullName,
      email,
      phoneNumber,
      birthdate,
    };
    dispatch(updateContact(el._id, editedContact));
    closeModal()
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div>
      <Button variant="success" onClick={openModal}>Update contact</Button>
      <Modal isOpen={modalIsOpen}>
        <div><h1>Update Contact</h1></div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full name : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              value={fullName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone number : </Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              value={phoneNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Birthdate : </Form.Label>
            <Form.Control
              type="number"
              placeholder="Birthdate"
              onChange={(e) => {
                setBirthdate(e.target.value);
              }}
              value={birthdate}
            />
          </Form.Group>
          <Button variant="success" onClick={handleSubmit}>
            Update contact
          </Button>
        </Form>
        <Button variant="danger" onClick={closeModal}>close</Button>
      </Modal>
    </div>
  );
};

export default EditContact;