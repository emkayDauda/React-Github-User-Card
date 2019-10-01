import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import CardList from './components/cardList'
import FollowersList from './components/followersList'


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
      usersFollowers: []
    }
  }

  
 
  componentDidMount(){
    // this.getProfile('emkayDauda')
  }

  render(){
    return (
      <AppContainer>
        <CardList users={this.state.users} />
        <FollowersList followers={this.state.usersFollowers} />
      </AppContainer>
    );
  }


  getProfile = (username = 'emkayDauda') => {
    axios
    .get(`https://api.github.com/users/${username}`)
    .then(response => {
      // console.log(response.data)
      this.setState(previousState => {
        return {
          users: [...previousState.users, response.data]
        }
      })
      axios
      .get(response.data.followers_url)
      .then(response => {
        console.log(response.data);
        this.setState(previousState => {
          return{
            usersFollowers: [...response.data]
          }
        })
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

const AppContainer =  styled.div`
  width: 80rem;
  margin: 0 auto;
`