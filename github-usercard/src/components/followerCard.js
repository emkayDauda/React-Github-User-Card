import React from 'react';
import styled from 'styled-components';

export default class FollwerCard extends React.Component {
    render(){
        const { follower } = this.props;
        console.log(follower);  
        return (
            <StyledFollower>
                <h4>follower.login</h4>
                <img src={follower.avatar_url} alt="User"/>
            </StyledFollower>
        )
    }
}

const StyledFollower =  styled.div`
    h4 {
        font-family: 'Tangerine', cursive;    
    }

    img {
        height: 5rem;
        width: 5rem;
    }
`