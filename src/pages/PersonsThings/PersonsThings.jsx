import React from 'react';
import PersonThing from '../../components/PersonThing/PersonThing'

const PersonsThings = (props) => {
  return ( 
    <>
      <h1>{props.name}'s Things</h1>
      {props.things.map((thing, idx) => 
        <PersonThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default PersonsThings;