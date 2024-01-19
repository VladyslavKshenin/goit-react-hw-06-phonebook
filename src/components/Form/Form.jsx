import React, { useState } from 'react';
import { Form, Button } from './Form.styled';
import {useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
      if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase().trim()
      )
    ) {
      toast.warn(`${name} is already in your contacts`, {
        position: 'top-right',
        theme: 'colored',
      });
    } else if (contacts.some(contact => contact.number === number.trim())) {
      toast.warn(`${number} is already in your contacts`, {
        position: 'top-right',
        theme: 'colored',
      });
    } else {
        dispatch(addNewContact(state));
        formReset();
    }
  };

  const formReset = () => {
    setState({ name: '', number: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};