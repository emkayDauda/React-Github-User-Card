import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import CardList from './components/cardList'


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: []
    }
  }

  
 
  componentDidMount(){
    // this.getProfile('emkayDauda')
  }

  render(){
    return (
      <CardList users={this.state.users} />
    );
  }


  getProfile = (username = 'emkayDauda') => {
    axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => {
      console.log(response.data)
      this.setState(previousState => {
        return {
          users: [...previousState.users, response.data]
        }
      })
      axios
      .get(response.data.followers_url)
      .then(response => {
        console.log(response.data);
        // const followers = response.data
        // followers.forEach(follower => {
        //   getProfile(follower.login);        
        // });
      })
      .catch(error => {
        console.log(error);
      })
  
    })
    .catch(error => {
      console.log(error)
    });
  }
  
}
