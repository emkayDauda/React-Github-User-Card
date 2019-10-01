import React from "react";

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { avatar_url, name, username, location, html_url, followers, following, bio } = this.props.user;
    return (
      <div>
        <img src={avatar_url} />
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
      </div>
    );
  }
}
