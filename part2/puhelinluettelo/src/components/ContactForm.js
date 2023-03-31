import React from "react"

const ContactForm = ({ addContact, newPerson, handleChange }) => {
  return (
  <form onSubmit={addContact}>
    <div>
      Name: <input
              name='name'
              value={newPerson.name || ''}
              onChange={handleChange}
            />
    </div>
    <div>
      Number: <input
              name='number'
              value={newPerson.number || ''}
              onChange={handleChange}
              />
    </div>
  <div>
    <button type="submit">Add</button>
  </div>
  </form>
)}

export default ContactForm
