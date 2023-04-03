
import { GlobalStyle } from "./GlobalStyles";
import { Layout, MainTitle, Title } from "./Layout/Layout";
import ContactList from './ContactList'
import ContactForm from "./ContactForm";
import Filter from "./Filter";



const App = () => {
    return (
        <Layout>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm/>
          <Title>Contacts</Title>
          <Filter/>
          <ContactList/>
        <GlobalStyle/>
        </Layout>
    );
  };

export default App; 

