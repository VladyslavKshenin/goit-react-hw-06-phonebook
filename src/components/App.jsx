import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './Form/Form';
import { ContactList } from './List/List';
import { Filter } from './Filter/Filter';
import { Section, Title } from './App.styled';

export const App = () => {
   return (
      <Section>
         <Title>Phonebook</Title>
         <ContactForm/>
         <Title>Contacts</Title>
         <Filter />
         <ContactList/>
         <ToastContainer
            autoClose={false}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
         />
      </Section>
   );
}