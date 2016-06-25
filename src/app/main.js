// import React from 'react';
// import {render} from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
// import configureStore from 'app/store'
// //import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
//
// const store = configureStore();
//
// render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>, document.getElementById('app')
// );

import React from 'react';
import ReactDOM from 'react-dom';

// Import styles like this:
//import './styles/main.scss';

// Import dependencies like this:
import Friday from './components/friday-component';

class App extends React.Component {
  render() {
    return (
      <div>I heard react is LAME! <Friday /></div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
