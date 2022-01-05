import React from 'react';
import FAQList from './FAQlist';

const App = (props) => {
  return(
    <div>
      <h1>We're Here to Help</h1>
      <FAQList data={props.data}/>
    </div>
  )
}

export default App;