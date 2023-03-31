import React from "react"

const Contacts = ({ contacts, deleteContact }) => {
  return (
   <div>
    {contacts.map((person) =>
      <div key={person.name}>
      {person.name} {person.number}
      <button onClick={() => deleteContact(person.id, person.name)}>
        Delete
      </button>
      </div>
       )}
  </div>
)}

export default Contacts
