import React from 'react';
import PersonThing from '../../components/PersonThing/BenThing'

const PersonsThings = (props) => {
  return ( 
    <>
      <h1>{props.name} Things</h1>
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