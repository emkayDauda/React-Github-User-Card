import React from 'react';
import styled from 'styled-components';

import FollowerCard from './followerCard';

export default class FollowersList extends React.Component {
    

    render(){
        const {followers} = this.props;
        console.log(followers);  
        return (
            <>
                {
                    followers.map(follower => <FollowerCard follower={follower} /> )
                }
            </>
        )
    }
}