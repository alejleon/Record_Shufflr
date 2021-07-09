import React from 'react';
import {Grid} from '@material-ui/core'


function RecordDisplay({currentRecord}) {

  console.log(currentRecord)


  return(
    <>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h2 id="album" className="titles">{currentRecord && currentRecord.basic_information.title}</h2>
        </Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1 id="artist" className="titles">{currentRecord && currentRecord.basic_information.artists[0].name}</h1>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </>
  )
}

export default RecordDisplay;