import React, {useState, useEffect} from 'react';
import ShuffleInput from './ShuffleInput';
import {Grid} from '@material-ui/core';

function App() {

  const [collection, setCollection] = usestate('');
  const [filteredCollection, setFilteredCollection] = useState('');






  return (
    <Grid container>
      <Grid item xs={12}>
        <ShuffleInput />
      </Grid>
      <Grid item xs={12}>
        <RecordRender />
      </Grid>
    </Grid>



  );
}

export default App;
