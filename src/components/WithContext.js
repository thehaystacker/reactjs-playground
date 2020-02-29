import React from 'react';
import ContextUsers from '../App';

const WithContext = () => {
  return props => (
    <ContextUsers.Consumer>
      {context => {
        <props.childern {...props} context={context}></props.childern>
      }}
    </ContextUsers.Consumer>
  )
}

export default WithContext;