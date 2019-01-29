import React, { Component } from 'react';
import Thread from './Thread';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Thread name="Juanito Filomeno" message="jaja salu2"
                imageUrl="https://bulma.io/images/placeholders/128x128.png"/>
      </div>
    );
  }
}

export default App;
