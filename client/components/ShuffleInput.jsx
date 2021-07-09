import React, {useState, useEffect} from 'react';
import {Grid} from '@material-ui/core';




function ShuffleInput(props) {

  useEffect(() => {
    if (props.currentCollection) {
      props.shuffler(props.currentCollection.releases)
    }
  }, [props.currentCollection])





  return (

    <Grid container>
      <Grid item xs={12}>
      <h3>Enter a username to shuffle</h3>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <input onChange={props.handleUsernameInput}></input>
          </Grid>
          <Grid item xs={12}>
            <button onClick={props.onShuffle}>Shuffle</button>
          </Grid>
        </Grid>
      </Grid>
      <Grid></Grid>

    </Grid>



  )

}

export default ShuffleInput;
