
import React from 'react'
import Nav from "./components/Navigation/Nav";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <Nav/>
      <ContactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App
