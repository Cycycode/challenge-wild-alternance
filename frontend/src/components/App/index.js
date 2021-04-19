// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import 
import './styles.scss';

import Loader from 'src/components/Loader';

// == Composant
const App = () => {

//! useState

  // Store the members in a state variable.
  // We are passing an empty array as the default value.
  const [members, setMembers] = useState([]);

  // Here it tells if we are charging the members
  const [loadingMembers, setLoadingMembers] = useState(true);

   // Here we update the state of the input everytime we type something
   // The value of the input is changing throught the state 
  const [newMemberName, setnewMemberName] = useState('');
  console.log(newMemberName);

//! methods

  const loadMembers = () => {
  // We use axios to get the list
  // We save it in the state setMembers
  // Here it's an array returned by the API
    axios.get('http://localhost:8000/members')
      .then((response) => {
        console.log('we got a success', response);
        setMembers(response.data); 
      })
      .catch((error) => {
        console.log('we got an error', error);
      })
      .finally(() => {
        console.log('finally'); 
        // i added a setTimeout for the style
        setTimeout(() => {
          setLoadingMembers(false);
        }, 2500);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit');
  };

  //! useEffect 

  useEffect(() => {
    console.log('useEffect');
    loadMembers();
  }, []);

  //! render
  
  return(
    <div className="app">
      <header>
        <h1>the crew</h1>
        <h2>visualize all the members of the crew<br />&<br />add braves sailors to it !
        </h2>
      </header>
        {(loadingMembers && <Loader />)}
        {!loadingMembers && (
        <div className="members">
          <ul className="member-list">
            {members.map((member => (
              <li 
                key={member.id}
              >
                {member.name}
              </li>
            )))}
          </ul>
          <form onSubmit={handleSubmit}>
            <p>add a new member</p>
            <input
              type="text"
              placeholder="enter the name here"
              value={newMemberName}
              onChange={(event) => 
              setnewMemberName(event.target.value)
              }
            />
            <button type="submit">+</button>
          </form>
          <div className="members-length">
            We now have {members.length} sailors in the crew !
          </div>
        </div>
      )} 
    </div>
  );
};

// == Export
export default App;
