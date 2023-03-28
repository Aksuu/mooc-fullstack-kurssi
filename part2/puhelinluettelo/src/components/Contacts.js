import React from "react"
import Person from "./Person"

const Contacts = ({ contacts }) => {
  return (
   <div>
    {contacts.map((person) =>
      <Person key={person.name} person={person}/>)}
  </div>
)}

export default Contacts
