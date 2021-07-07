import React, {useState, useEffect} from 'react';
import ShuffleInput from './ShuffleInput';
import RecordDisplay from './RecordDisplay'
import axios from 'axios';
import {Grid} from '@material-ui/core';

function App() {

  const [collection, setCollection] = useState('');
  const [filteredCollection, setFilteredCollection] = useState('');
  const [username, setUsername] = useState('');
  const [currentRecord, setCurrentRecord] = useState('');


  const onShuffle = () => {
    console.log(username)
    axios.get(`https://api.discogs.com/users/${username}/collection/folders/0/releases`)
    .then((collection) => {
      console.log(username, collection)
      // setCollection(collection)
    })
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
    console.log(username)
  }



  return (
    <Grid container>
      <Grid item xs={12}>
        <ShuffleInput onShuffle={onShuffle} handleUsernameInput={handleUsernameInput}/>
      </Grid>
      <Grid item xs={12}>
        <RecordDisplay />
      </Grid>
    </Grid>
  );
}

export default App;
