import React from 'react';
import {Link} from 'react-router';
import notifier from 'node-notifier';
import remote from 'remote';

class AboutPage extends React.Component {
  handleClick() {
    notifier.notify({
      title: 'App title',
      message: 'some message',
      icon: __dirname + '/image/favicon.png',
      sound: false,
      wait: false
    });
  }

  render() {
    return (
      <div>
        <h2>About Page</h2>
        <p>About us.</p>
        <p>Version: {remote.require('app').getVersion()}</p>
        <Link to='home'>back Home</Link>
        <fieldset>
          <legend>Notification</legend>
          <label for="title">Title</label>
          <input id="title" type="text" value="Notification Title" />
          <label for="message">Message</label>
          <input id="message" type="text" value="Notification Message" />
          <button ref="notifyButton" onClick={this.handleClick} id="notifyButton">Generate</button>
        </fieldset>
      </div>
    )
  }
}

export default AboutPage;