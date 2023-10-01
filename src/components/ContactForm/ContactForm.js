import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import{selectContacts} from 'redux/selectors'

import { addContacts } from 'redux/contactSlice';

import {
  ContactsForms,
  ContactsLabel,
  ContactsBtn,
  ContactsInput,
  Span,
} from './ContactForm.styled';

export const ContactsForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const formSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

   const filterNameContact = contacts.some(
     contact => contact.name.toLowerCase() === name.toLowerCase()
   );

    if (filterNameContact) {
      return toast.error(`${name} is already in contacts.`);
    }
    dispatch(addContacts(name, number));

    form.reset();
  };

  return (
    <>
      <ContactsForms onSubmit={formSubmit}>
        <ContactsLabel>
          <Span>Name:</Span>
          <ContactsInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactsLabel>
        <ContactsLabel>
          <Span>Phone:</Span>
          <ContactsInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactsLabel>
        <ContactsBtn>Add contact</ContactsBtn>
      </ContactsForms>
      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};
