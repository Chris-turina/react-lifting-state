import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';
import Voting from './Voting';

function PostCard(props){
  const styles = {
    containerStyle: {
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid black',
      marginTop: '10px',
      padding: '10px',
      fontFamily: 'sans-serif',
    },
  };

  return(
    <div style={styles.containerStyle}>
      <Voting counter={props.counter}/>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

//    <p><em>{displayTimeOpen(props.timeOpen)} ago</em></p>



// function displayTimeOpen(timeOpen) {
//   return timeOpen.from(new Moment(), true);
// }

PostCard.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string
  // timeOpen: PropTypes.instanceOf(Moment).isRequired
};

export default PostCard;
