import React, { useState } from 'react';
import Grid from './components/Grid';
import Form from './components/Form';
import {Route} from 'react-router-dom';
import './App.css';

function App() {

  const [photos, updateP] = useState([{
    id: 0,
    title: "First photo",
    url: 'https://images.pexels.com/photos/4849116/pexels-photo-4849116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },{
    id: 1,
    title: "Laddakh",
    url: 'https://www.holidify.com/images/bgImages/LADAKH.jpg'
  },{
    id: 2,
    title: "Switzerland",
    url: 'https://images.pexels.com/photos/2026452/pexels-photo-2026452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500'
  }]);

  const removePost = (removePhoto) => {
    const arr = photos.filter(photo => photo !== removePhoto)
    updateP(arr);
  }
  
  return (
    <div className="container">
      <Route exact path = "/" render = {() => (
        <div>
        <h1>Ph<span>o</span>t<span>o</span>gram</h1>
        <Grid toRemove={(q) => {removePost(q)}} posts={photos} />
        </div>
      )} />
      <Route exact path = "/AddPhoto" render = {() => (
        <div>
        <h1>Ph<span>o</span>t<span>o</span>gram</h1>
        <h2>Add your photo here</h2>
        <Form/>
        </div>
      )} />
    </div>
  );
}

export default App;
