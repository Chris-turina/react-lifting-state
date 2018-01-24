// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Header from './Header';
// import FeedPage from './FeedPage';
// import NewPostForm from './NewPostForm';
//
//
// class App extends React.Component{
//
//   constructor(props){
//     super(props);
//     this.state = {
//       masterPostArray: [
//         { title: 'Sup', description: 'Yo this is my favorite post. Hopefully you think so to and upvote it!', counter: 0 },
//         { title: 'Hello?', description: 'Is this thing working?', counter: 1 },
//         { title: 'Drrrrr', description: 'Notsogoodatypingwell!11', counter: 2 }
//
//       ]
//
//     };
//     this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
//     this.handleSortList = this.handleSortList.bind(this);
//   }
//
//   handleSortList(post){
//
//   }
//
//   handleAddingPostToList(newPost){
//     let newMasterPostArray = this.state.masterPostArray.slice();
//     newMasterPostArray.push(newPost);
//     this.setState({masterPostArray: newMasterPostArray});
//   }
//
//   render(){
//     return(
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path='/' render={()=> <FeedPage postFeed={this.state.masterPostArray} onVoteSort={this.handleSortList}/>} />
//           <Route path='/newpostform' render={()=> <NewPostForm onNewPostCreation={this.handleAddingPostToList} />} />
//         </Switch>
//       </div>
//     );
//   }
//
// }
//
//
// export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import FeedPage from './FeedPage';
import NewPostForm from './NewPostForm';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterPostArray: [
        { title: 'Sup', description: 'Yo this is my favorite post. Hopefully you think so to and upvote it!', counter: 0 },
        { title: 'Hello?', description: 'Is this thing working?', counter: 1 },
        { title: 'Drrrrr', description: 'Notsogoodatypingwell!11', counter: 2 }

      ]

    };
    this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
    this.handleSortList = this.handleSortList.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  handleSortList(post){
    let newMasterSortArray = this.state.masterPostArray.slice();

  }

  handleVote(thing) {
    console.log(thing)
    update thing from master list...

  }

  handleAddingPostToList(newPost){
    let newMasterPostArray = this.state.masterPostArray.slice();
    newMasterPostArray.push(newPost);
    this.setState({masterPostArray: newMasterPostArray});
  }

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=> <FeedPage
              postFeed={this.state.masterPostArray}
              onVoteSort={this.handleVote}
            />} />
          <Route path='/newpostform' render={()=> <NewPostForm onNewPostCreation={this.handleAddingPostToList} />} />
        </Switch>
      </div>
    );
  }

}


export default App;
