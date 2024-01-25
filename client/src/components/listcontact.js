import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/actions';
import ContactCard from './contactcard';

const ListContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {contacts &&
        contacts.map((el, index) => (
          <ContactCard key={index} el={el} />
        ))}
    </>
  );
};

export default ListContact;
