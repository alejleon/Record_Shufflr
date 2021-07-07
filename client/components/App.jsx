import React, {useState, useEffect} from 'react';
import ShuffleInput from './ShuffleInput';
import axios from 'axios';
import {Grid} from '@material-ui/core';

function App() {

  const [collection, setCollection] = usestate('');
  const [filteredCollection, setFilteredCollection] = useState('');
  const [username, setUsername] = useState('');
  const [currentRecord, setCurrentRecord] = useState('');


  const onShuffle = () => {
    axios.get(`https://api.discogs.com/users/${username}/collection/folders/0/releases`)
    .then((collection) => {
      console.log(collection)
      setCollection(collection)
    })
  }

  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
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
