import React, { useState } from 'react';
import { Form, Button } from './Form.styled';
import { useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ name: '', number: '' });
  const { name, number } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewContact(state));
    formReset();
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