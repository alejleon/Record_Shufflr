import React from 'react';


function RecordDisplay({currentRecord}) {


  currentRecord && console.log(currentRecord.basic_information)


  return(
    <>
      <h1>{currentRecord && currentRecord.basic_information.artists[0].name}</h1>
      <h2>{currentRecord && currentRecord.basic_information.title}</h2>
    </>
  )
}

export default RecordDisplay;