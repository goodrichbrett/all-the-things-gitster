import React from 'react';
import ShahzadsThing from '../../components/BenThing/BenThing'

const ShahzadsThings = (props) => {
  return ( 
    <>
      <h1>Shahzad's Things</h1>
      {props.bensThings.map((thing, idx) => 
        <ShahzadsThing 
          key={idx}
          thing={thing}
        />
      )}

    </>
   );
}
 
export default ShahzadsThings;