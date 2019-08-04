/* eslint-disable */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import P from 'prop-types';

import { Provider } from 'mobx-react';
import IndexPage from '@pages/IndexPage';
import stores from '@stores';

import Context from './AppContext';

// layouts
import ApplicationLayout from './common/layouts/AppLayout';

// pages

class ScrollToTop extends Component {
  container = React.createRef();

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <Context.Provider value={this.state}>
          <Router>
            <Route
              render={({ location }) => (
                <ScrollToTop
                  location={location}
                  setHeaderPosition={this.setHeaderPosition}
                >
                  <CommonLayout
                    exact
                    name="Index"
                    path="/"
                    component={IndexPage}
                    topMenuAbsolute
                    logoVariant="main"
                    isMainPage
                  />
                </ScrollToTop>
              )}
            />
          </Router>
        </Context.Provider>
      </Provider>
    );
  }
}

function CommonLayout({ component: ChildComponent, ...props }) {
  return (
    <Route
      {...props}
      render={(componentProps) => (
        <ApplicationLayout {...props}>
          <ChildComponent {...componentProps} {...props} />
        </ApplicationLayout>
      )}
    />
  );
}

CommonLayout.propTypes = {
  component: P.oneOfType([P.element, P.func]).isRequired,
};

export default App;
