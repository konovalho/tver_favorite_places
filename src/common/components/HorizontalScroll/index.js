import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

import { PAGE_TRANSITION } from '@constants';
import checkDevice from '@utils/checkDevice';
import { delay, debounce } from 'lodash';

import { getLastScrollCoord } from './utils';

import styles from './index.styl';

class HorizontalScroll extends PureComponent {
  componentDidMount() {
    if (!checkDevice()) {
      this.root.addEventListener('scroll', this.handleRootScrool);
      window.addEventListener('resize', this.handleResize);
    }
    delay(() => {
      this.setDeafaultScroll();
    }, PAGE_TRANSITION);
  }

  componentWillUnmount() {
    this.root.removeEventListener('scroll', this.handleRootScrool);
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setMaxScroll();
  };

  setDeafaultScroll = () => {
    this.countSetScrollPosition = 0;
    this.setMaxScroll();
    this.setScrollPositon(0);
  };

  setMaxScroll = () => {
    const { scrollWidth, clientWidth } = this.root;
    this.maxScroll = scrollWidth - clientWidth;
  };

  setScrollPositon = (newScroll, isRoot) => {
    if (this.countSetScrollPosition < 2) {
      this.countSetScrollPosition += 1;
      this.setMaxScroll();
    }
    const lastScrollCoord = getLastScrollCoord(newScroll, this.maxScroll);

    this.lastScrollCoord = lastScrollCoord;
    if (!isRoot) this.root.scrollLeft = lastScrollCoord;
  };

  handleSwiped = (e, deltaX) => {
    this.swippble = false;
    const newScroll = this.lastScrollCoord + deltaX;
    this.setScrollPositon(newScroll);
    e.preventDefault();
  };

  handleSwiping = (e, deltaX) => {
    if (!this.swippble) this.swippble = true;
    const newScroll = this.lastScrollCoord + deltaX;

    this.root.scrollLeft = newScroll;
    e.preventDefault();
  };

  rootRef = (node) => {
    this.root = node;
  };

  handleRootScrool = () => {
    const { scrollLeft } = this.root;
    if (this.lastScrollCoord !== scrollLeft && !this.swippble) {
      this.setScrollPositon(scrollLeft, true);
    }
  };

  throttledHandleRootScroll = debounce(this.handleRootScrool, 100);

  render() {
    const { className, children } = this.props;

    return (
      <div className={styles.root} ref={this.rootRef}>
        <Swipeable
          className={className}
          trackMouse
          onSwiping={this.handleSwiping}
          onSwiped={this.handleSwiped}
        >
          {children}
        </Swipeable>
      </div>
    );
  }
}

HorizontalScroll.propTypes = {
  className: PropTypes.string,
};

export default HorizontalScroll;
