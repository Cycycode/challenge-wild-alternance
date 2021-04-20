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

//! methods

  // this is the API url to fetch my data or add a member
  const apiUrl = 'http://localhost:8000/members';

  //& this method is called when i initialize the app with the useEffect
  //& it's also called when i add a member to the list, to update it
  const loadMembers = () => {
  // We use axios to get the list
  // We save it in the state setMembers
  // Here it's an array returned by the API
    axios.get(apiUrl)
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

  //& this method is called when i submit the form
  //& it's adding a member to the list and update it
  //& it's only working if the input value is more than 3 caracters
  const handleNewMember = (event) => {
    // it's stopping the refresh of the app with the submitting
    event.preventDefault();
    console.log('handleNewMember');
    axios.post(apiUrl, {
      'name': newMemberName,
    })
    .then((response) => {
      console.log('we got a success', response);
    })
    .catch((error) => {
      console.log('we got an error', error);
    })
    .finally(() => {
      console.log('finally'); 
      setnewMemberName('');
      loadMembers();
    });
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
        <h1>crew</h1>
        <h2>visualize all the members of the crew<br />&<br />add braves sailors to it&nbsp;!
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
          <form onSubmit={handleNewMember}>
            <label htmlFor="name">add a new member</label>
            <input
              type="text"
              name="name"
              placeholder="enter the name here"
              minLength="2"
              value={newMemberName}
              onChange={(event) => 
              setnewMemberName(event.target.value)
              }
            />
            <button type="submit">+</button>
          </form>
          <div className="members-length">
            We now have {members.length} sailors in the crew&nbsp;!
          </div>
        </div>
      )}
      <footer>
        <div>made by cycycode - 2021</div>
      </footer> 
    </div>
  );
};

// == Export
export default App;
