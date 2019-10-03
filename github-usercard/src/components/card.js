import React from "react";
import styled from 'styled-components';

export default class UserCard extends React.Component {
  render() {
    const { avatar_url, name, username, location, html_url, followers, following, bio } = this.props.user;
    return (
      <CardContainer>
        <img src={avatar_url} alt="User"/>
        <div>
            <h4>Details</h4>
            <h3>{name}</h3>
            <p></p>
            <p>{username}</p>
            <p>{`Location: ${location}`}</p>
            <a href={html_url}>profile</a>
            <p>{`Followers: ${followers}`}</p>
            <p>{`Following: ${following}`}</p>
            <p>{`Bio: ${bio}`}</p>

        </div>
      </CardContainer>
    );
  }
}


const CardContainer = styled.div`
    display: flex;
`