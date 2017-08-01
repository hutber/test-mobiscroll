import React from 'react';
import {render} from 'react-dom';
import Mobiscroll from '../lib/mobiscroll/js/mobiscroll.custom-3.2.0.min';
import '../lib/mobiscroll/css/mobiscroll.custom-3.2.0.min.css';
import '../css/main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      settings: {
        display: 'inline',
        yearChange: false,
        max: new Date(),
        marked: [
          new Date(2017, 5, 4)
        ]
      }
    };
  }

  render () {
    return <Mobiscroll.Calendar type="hidden" options={this.state.settings} />;
  }
}

render(<App/>, document.getElementById('app'));

