import React from 'react';
import UserCard from './card'

export default class CardList extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        const {users} = this.props;
        return (
          <>
              {
                users.map(user => <UserCard user={user} />)
            }
          </>
        )
        
    }
}