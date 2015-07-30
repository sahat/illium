import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'offline'
    }
  }

  componentDidMount() {
    window.addEventListener('online',  this.updateOnlineStatus);
    window.addEventListener('offline',  this.updateOnlineStatus);
  }

  componentDidUpdate() {
    console.log('new state', this.state);
  }

  updateOnlineStatus() {
    this.setState({
      status: navigator.onLine ? 'online' : 'offline'
    });
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <p>This is the home page.</p>
        <Link to='about'>to About</Link>
        <h2>{this.state.status}</h2>
      </div>
    )
  }
}

export default HomePage;