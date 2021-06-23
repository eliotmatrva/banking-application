import React, { useContext } from 'react';
import { UserContext } from '../index.js'
export default function AllData(){
  const { value, setValue } = useContext(UserContext);
  let users = value.users;
  return (
    <>
    <h1>All Data<br />
      {users.map((element, i) => {
        return (
          <div key={i}>
            <h2>{element.name}</h2>
            <p>{element.email}</p>
            <p>{element.password}</p>
          </div>
        );
      })};
    </h1>
    </>
    
  );
}
