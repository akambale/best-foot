import axios from 'axios';
import React, { useState } from 'react';

import Profile from './Profile.jsx';

const SelectProfile = () => {
  const [profiles, setProfiles] = useState([]);

  if (profiles.length < 1) {
    axios.get('/api/allUsers').then(response => {
      const { data, err } = response.data;
      if (err) {
        alert('something went wrong 😞');
        return;
      }

      const profiles = data.map(({ name, userID }) => {
        return <Profile name={name} userID={userID} key={userID} />;
      });

      setProfiles(profiles);
    });
  }

  return (
    <div className='select-profile'>
      <h3>Select a profile to rate or review results</h3>
      <div className='select-profile__cards'>{profiles}</div>
    </div>
  );
};

export default SelectProfile;
