import { GET_CONTACTS } from "./actiontypes";
import axios from 'axios';

export const getContacts = () => (dispatch) => {
  axios.get("/getContacts")
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data })) 
    .catch((err) => console.error(err));
}

export const addContact = (newContact) => (dispatch) => {
  axios.post("/addContact", newContact)
    .then((res) => {
      dispatch(getContacts())
    })
    .catch((err) => console.error(err));
}

export const deleteContact = (idContact) => (dispatch) => {
  axios.delete(`/deleteContact/${idContact}`)
    .then((res) => {
      dispatch(getContacts())
    })
    .catch((err) => console.error(err));
}

export const updateContact = (idContact, updatedContact) => (dispatch) => {
    axios.put(`/updateContact/${idContact}`, updatedContact)
      .then(() => {
        dispatch(getContacts())
      })
      .catch((err) => console.error(err));
  }
  
