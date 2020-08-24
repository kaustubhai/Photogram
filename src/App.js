import React, { useState, useEffect } from 'react';
import Grid from './components/Grid';
import Form from './components/Form';
import { Route } from 'react-router-dom';
import db from './firebase/config';
import firebase from 'firebase';
import './App.css';

function App() {

  const [photos, updateP] = useState([]);

  const [ID, updateId] = useState(0);

  //getting data
  useEffect(() => {
    db.collection('photos')
      .orderBy('id')
      .onSnapshot(photo => updateP(photo.docs.map(doc => ({ id: doc.id, data: doc.data() }))));
    updateId(photos.length)
  }, [])

  //putting data
  const toAppend = (post, i) => {
    db.collection('photos').add({
        url: post.url,
        title: post.title,
        id: i
    })
    updateId(photos.length)
  }

  const removePost = (removePhoto, i) => {
    var R = db.collection('photos').where('url', '==', `${removePhoto.url}`);
    R.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    })
    // const arr = photos.filter(photo => photo.data !== removePhoto)
    // updateP(arr);
    
    updateId(photos.length)
  }
  
  return (
    <div className="container">
      <Route exact path = "/" render = {() => (
        <div>
        <h1>Ph<span>o</span>t<span>o</span>gram</h1>
        <Grid Id={ID} toRemove={(q, i) => {removePost(q, i)}} posts={photos} />
        </div>
      )} />
      <Route exact path = "/AddPhoto" render = {() => (
        <div>
        <h1>Ph<span>o</span>t<span>o</span>gram</h1>
        <h2>Add your photo here</h2>
        <Form Id={ID} toAppend={toAppend} />
        </div>
      )} />
    </div>
  );
}

export default App;
