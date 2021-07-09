import React, {useState, useEffect} from 'react';
import {Grid, Button, TextField} from '@material-ui/core';




function ShuffleInput(props) {

  useEffect(() => {
    if (props.currentCollection && props.genre) {
      let releases = props.currentCollection.releases;
      let filteredArray = []

      for (let i = 0; i < releases.length; i++) {
        // console.log(releases[i].basic_information.genres)
        let genres = releases[i].basic_information.genres
        for (let j = 0; j < genres.length; j++) {
          if (props.genre.toLowerCase() === genres[j].toLowerCase()) {
            filteredArray.push(releases[i]);
          }
        }
      }
      props.shuffler(filteredArray)
    } else if (props.currentCollection) {
      // console.log(props.currentCollection.releases)
      props.shuffler(props.currentCollection.releases)
    }
  }, [props.currentCollection, props.genre])





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
            <TextField className="textField" label="genre (optional)" variant="outlined" onChange={props.handleGenreInput}></TextField>
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
