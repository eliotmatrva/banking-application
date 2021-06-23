import React from 'react';
import Card from './card';
import { UserContext } from '../index.js'
export default function Login(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);
    
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
      }

      function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
      }

      function successfulLogin(){
          setStatus('You logged in! 🎉');
          setShow(false);
      }
    
      function handleLogin(){
        console.log(email,password);
        if (!validate(email,    'email'))     return;
        if (!validate(password, 'password'))  return;
        
        const users = ctx.users;
        /* check to see if submitted un+pw matches a user then console.log the result*/
        let userIndexPosition = users.findIndex((user) => {
            return user.email === email && user.password === password
        })
        
        userIndexPosition ? (setStatus('User not found.  Try again')) : (successfulLogin());
        
      }
    
      return (
        <Card
          bgcolor="primary"
          header="Log In"
          status={status}
          body={show ? (
              <>
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleLogin}
                >
                  Log in!
                </button>
                
              </>
            ) : (
              <>
              <h5>You are now logged in!</h5>
              <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Log in as another user
              </button>
              </>
            )}
        />
      )
  }