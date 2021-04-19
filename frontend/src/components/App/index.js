// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// == Import 
import './styles.scss';

import Loader from 'src/components/Loader';

// == Composant
const App = () => {

  // Store the members in a state variable.
  // We are passing an empty array as the default value.
  const [members, setMembers] = useState([]);

  // Here it tells if we are charging the members
  const [loadingMembers, setLoadingMembers] = useState(true);


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
        setTimeout(() => {
          setLoadingMembers(false);
        }, 2500);
      });
  };


  useEffect(() => {
    console.log('useEffect');
    loadMembers();
  }, []);

  console.log(members.length);

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
          <form>
            <p>add a new member</p>
            <input
              type="text"
              placeholder="enter the name here"
            />
            <button>add<br />member</button>
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
