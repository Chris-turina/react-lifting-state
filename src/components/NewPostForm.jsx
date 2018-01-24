import React from 'react';
import { v4 } from 'uuid';
// import Moment from 'moment';

function NewPostForm(props) {
  let _title = null;
  let _description = null;

    function handleNewPostForm(event){
      event.preventDefault();
      props.onNewPostCreation({title: _title.value, description: _description.value, id: v4()});

      _title.value = '';
      _description.value = '';
    }

  return(
    <div>
      <form onSubmit={handleNewPostForm}>
        <input
          placeholder='Enter a Title'
          type='text'
          ref={(input) => {_title = input;}} />
        <textarea
          placeholder='Enter a Description'
          type='text'
          ref={(input) => {_description = input;}} />
        <button type='submit'>Submit Form</button>
      </form>
    </div>
  );
}


export default NewPostForm;
