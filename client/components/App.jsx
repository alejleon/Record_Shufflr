import React, {useState, useEffect} from 'react';
import ShuffleInput from './ShuffleInput';
import RecordDisplay from './RecordDisplay'
import axios from 'axios';
import {Grid} from '@material-ui/core';

function App() {

  const [currentCollection, setCurrentCollection] = useState('');
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [username, setUsername] = useState('');
  const [currentRecord, setCurrentRecord] = useState('');
  const [previousShuffle, setPreviousShuffle] = useState([])

  // useEffect(() => {
  //   setCurrentRecord(currentCollection[0])
  // }, [currentCollection])


  const shuffler = (array) => {
    let randomInt = () => {
      return randomIndex = Math.floor(Math.random() * ((array.length - 1) - 0))
    }

    let randomInt = randomInteger()
    while (previousShuffle.includes(array[randomInt])) {
      randomInt = randomInteger()
    }

    if (previousShuffle.length >= 15) {
      let tempStorage = previousShuffle.slice();
      tempStorage.pop()
      setPreviousShuffle([array[randomInt], ...tempStorage])
    } else {
      setPreviousShuffle([array[randomInt], ...previousShuffle])
    }
  }



  const onShuffle = async () => {
    const options = {
      params: {username: username}
    }
    let userCollection = await axios.get('http://localhost:3001/collection', options)
    setCurrentCollection(userCollection.data)
    console.log(currentCollection)
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
