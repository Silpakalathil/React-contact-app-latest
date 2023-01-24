import React from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';


const ContactList = (props) => {
   // console.log(props);
    const deleteContactHandler= (id) =>{
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return(
            /*
                <div className='item'>
                <div className='content'>
                    <div className='header'>
                        {contact.name}
                    </div>
                    <div>{contact.email}</div>
                    <i className='trash alternate outline icon'></i>
                </div>
            </div>
            since this is a repeating , we are creating a new compoenent and move the above section to the
             there
        */
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key ={contact.id}></ContactCard>
        )
    })
    return (
        <div className='main'>
            <h2>Contact List
                <Link to='/add'>
                    <button className='ui button blue right'>AddContact</button>
                </Link>
               
            </h2>
            <div className='ui celled list'>{renderContactList}</div>
        </div>
        
    );

}

export default ContactList;