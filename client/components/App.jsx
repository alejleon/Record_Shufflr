import React, {useState, useEffect} from 'react';
import ShuffleInput from './ShuffleInput';
import RecordDisplay from './RecordDisplay'
import axios from 'axios';
import {Grid} from '@material-ui/core/';

function App() {

  const [currentCollection, setCurrentCollection] = useState(null);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [username, setUsername] = useState('');
  const [genre, setGenre] = useState('')
  const [currentRecord, setCurrentRecord] = useState(null);
  const [previousShuffle, setPreviousShuffle] = useState([])


  // Shuffling Mechanism ////////////////////////////////
  const shuffler = (array) => {
    let randomInteger = () => {
      return Math.floor(Math.random() * ((array.length - 1) - 0))
    }

    let randomInt = randomInteger()
    while (previousShuffle.includes(array[randomInt])) {
      console.log(array[randomInt].id)
      randomInt = randomInteger()
    }

    if (previousShuffle.length >= 25) {
      let tempStorage = previousShuffle.slice();
      tempStorage.pop()
      setPreviousShuffle([array[randomInt], ...tempStorage])
      setCurrentRecord(array[randomInt])
    } else {
      setPreviousShuffle([array[randomInt], ...previousShuffle])
      setCurrentRecord(array[randomInt])
    }
  }

  const onShuffle = async () => {
    const options = {
      params: {username: username}
    }
    let userCollection = await axios.get('http://localhost:3001/collection', options)
    await setCurrentCollection(userCollection.data)
  }


  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
    console.log(username)
  }

  const handleGenreInput = (e) => {
    setGenre(e.target.value);
  }


  return (
    <Grid container id="mainApp" >
      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12} style={{height: "40vh"}}>
        <ShuffleInput
          onShuffle={onShuffle}
          handleUsernameInput={handleUsernameInput}
          handleGenreInput={handleGenreInput}
          shuffler={shuffler}
          currentCollection={currentCollection}
          currentRecord={currentRecord}
          previousShuffle={previousShuffle}
          genre={genre}
        />
      </Grid>
      <Grid item xs={12}>
        <RecordDisplay currentRecord={currentRecord}/>
      </Grid>
    </Grid>
  );
}

export default App;
