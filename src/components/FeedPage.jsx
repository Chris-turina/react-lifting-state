import React from 'react';
import PostCard from './PostCard';



function FeedPage(props) {

  // console.log(props.postFeed);
  return(
    <div>
      {props.postFeed.map((postArray,index) =>
        <PostCard
          title={postArray.title}
          description={postArray.description}
          counter={postArray.counter}
          key={postArray.index}
        />
      )}
    </div>
  );
}


export default FeedPage;
