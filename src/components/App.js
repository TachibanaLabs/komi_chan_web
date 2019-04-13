import React, { Component } from 'react';
import Thread from './Thread';
import ThreadService from '../services/ThreadService';

class App extends Component {
  state = {
    threads: []
  };

  componentDidMount() {
    ThreadService.allThreads()
      .then(threads => this.setState(threads))
      .catch(err => console.error(err));
  }

  render() {
    return this.state.threads.length > 0 ? (
      <div className="container">
        {this.state.threads.map(thread => this.renderThread(thread))}
      </div>
    ) : (
      <div className="container">LOL no hay</div>
    );
  }

  renderThread = thread => {
    const { id, message } = thread;
    return (
      <Thread
        key={id}
        name={id}
        message={message}
        imageUrl="https://bulma.io/images/placeholders/128x128.png"
      />
    );
  };
}

export default App;
