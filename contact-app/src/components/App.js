import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {

  const contacts = [
    {
      id: "1",
      name: "Rahul",
      email: "rahul@example.com"
    },
    {
      id: "2",
      name: "Madhur",
      email: "madhur@example.com"
    }
  ];

  return (    
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts} />
    </div>
    
  );
}

export default App;
