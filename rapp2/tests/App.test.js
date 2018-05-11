import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';


var props;
var mountedApp;
const theApp = () => {
  if (!mountedApp) {
    mountedApp = shallow(
      <App />
    );
  }
  return mountedApp;
}

beforeEach(() => {
  props = {
    // onSearchChange: undefined
  };
  mountedApp = undefined;
});


it("always renders a div", () => {
  const divs = theApp().find("div");
  expect(divs.length).toBeGreaterThan(0);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
