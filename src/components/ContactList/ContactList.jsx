import React from "react";
import PropTypes from 'prop-types';
import {MdDelete} from 'react-icons/md';
import { List, Item, IconUser, Text, Button } from "./ContactList.styled";

import {getContacts, getFilter, deleteContact} from '../../redux/contactsSlice';
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filterContacts = (filter, contacts) => {
          if(filter){
            const lowerCaseFilter = filter.toLowerCase();
            return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter))
          } else {
            return contacts;
          }
    };

    const visibleContacts = filterContacts(filter, contacts);
    
    return (
        <List>
            {visibleContacts.map(({name, id, number})=>
            <Item key={id}>
                <Text><IconUser/>{name} : {number}</Text>
            <Button type="button" onClick={()=>dispatch(deleteContact(id))}><MdDelete/></Button>
            </Item>
            )}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,}))
};

export default ContactList;