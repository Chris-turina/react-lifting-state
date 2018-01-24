import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const styles = {
    containerStyle: {
      height: '100px',
      border: '2px solid black',
      padding: '10px',
      fontFamily: 'sans-serif',
      fontSize: '20px',
    }
  };
  return (
    <div style={styles.containerStyle}>
      <Link to='/'>Home</Link> | <Link to='/newpostform'>Add Post</Link>

    </div>

  );
}

export default Header;
