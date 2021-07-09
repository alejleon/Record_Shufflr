import React, {useState, useEffect} from 'react';
import {Grid, Button, TextField} from '@material-ui/core';




function ShuffleInput(props) {

  useEffect(() => {
    if (props.currentCollection) {
      props.shuffler(props.currentCollection.releases)
    }
  }, [props.currentCollection])





  return (

    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
      <h1 id="mainTitle" >SHUFFLR</h1>
      <h2 className="titles" >Enter your Discogs username</h2>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={12}>
        <Grid container style={{}}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2} style={{textAlign: "left"}}>
            <TextField className="textField" label="username" variant="filled" onChange={props.handleUsernameInput}></TextField>
          </Grid>
          <Grid item xs={2} style={{textAlign: "right"}}>
            <TextField className="textField" label="genre (optional)" variant="outlined" ></TextField>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button id="button" variant="contained" onClick={props.onShuffle}>Shuffl</Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Grid>
      <Grid></Grid>

    </Grid>



  )

}

export default ShuffleInput;
