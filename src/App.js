import React, { useState } from "react";
import data from "./mock.json";

const App = () => {

  const [contact, setContacts] = useState(data);
  //we use data from json and storing it in useState using the useState hook.
  //this state is useable in the contacts variable. The setContacts function updates the state.

  return (
    <div className = "app-container">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>LastName</th>
            <th>createdAt</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((contacts) => (
          <tr>
            <td>{contacts.id}</td>
            <td>{contacts.firstName}</td>
            <td>{contacts.LastName}</td>
            <td>{contacts.createdAt}</td>
            <td>{contacts.Salary}</td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}

export default App;



