import React ,{useState, useEffect} from 'react';
import {v4 as uuid} from "uuid"; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from  './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
 /* var contacts =[
  {
    id:1,
    name: "silpa",
    email: "silpa@gmail.com"
  },
  {
    id:2,
    name: "syam",
    email: "syam@gmail.com"
  }
]*/

const LOCAL_STORAGE_KEY = "contacts";
//const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
     setContacts([...contacts, {id: uuid(), ...contact}]);
 }
 const removeContactHandler =(id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList);
 }
 const [contacts, setContacts] = useState(() => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
});
/*useEffect(() => { 
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(retriveContacts);
  alert('testing')
  if (retriveContacts) setContacts(retriveContacts);
}, []);*/
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
}, [contacts]);

  return (
    <div className='ui container'> 
   {/*  <Header/>
       <AddContact addContactHandler ={addContactHandler}/>
       {/*  Adding props to the contact list*/}
    {/*  <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>*/}  
    <Router>
      <Header/>
      <div className='wrapper'>
        <Routes>
       {/* <Route path='/' excat component={ContactList}/>
        <Route path='/add' component={AddContact}/> */}
         <Route path='/' element={
           <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
         }/>
         <Route path='/add' element={
          <AddContact addContactHandler ={addContactHandler}/>
         }/>
         <Route path='/contact/:id' element={
          <ContactDetail/>
         }/>
        </Routes>
        </div>
    </Router>
    </div>

  )
}

export default App;
