import React from 'react';

class Voting extends React.Component {

  constructor(props) {
    super(props);
    this.onVote = this.onVote.bind(this);
  }

  onVote(e) {
    this.props.onVoteChange(e.target.value);
  }


  onUpClick(props) {
    // setState(this.props.counter);
    // _counter +=1;
    // // this.setState({counter: _counter + 1})

    // this.setState({ this.props.counter += 1 });
    // props.onVoteSort({counter: _counter.value});

  }

  onDownClick(props) {
    this.setState({ counter: this.props.counter - 1 })
  }

  render(props){
    const styles = {
      containerStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: '10px',
        width: '70px',
        alignItems: 'center'
      },
      arrowStyle: {
        width: '15px',
        height: '15px',
      },
      arrowStyleUpsideDown: {
        height: '15px',
        width: '15px',
        transform: 'rotate(180deg)'
      },
      counter: {
        fontSize: '24px',
        lineHeight: '10px',
        color: '#666'
      }
    };

    return(

      <div style={styles.containerStyle}>
        <img value={+1} onClick={this.onVote} style={styles.arrowStyle} src='https://cdn.pixabay.com/photo/2013/07/13/09/50/arrow-156118_1280.png' />
        <p style={styles.counter}>{this.props.counter}</p>
        <img onClick={this.onDownClick} style={styles.arrowStyleUpsideDown} src='https://cdn.pixabay.com/photo/2013/07/13/09/50/arrow-156118_1280.png' />
      </div>
    );
  }
}


export default Voting;
