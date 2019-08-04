import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import StoryRouter from 'storybook-react-router';

import CommonLayout from '@layouts/CommonLayout';

setAddon(JSXAddon);

const requireContext = require.context('../src', true, /\.story\.js$/);
const loadStories = () => {
  requireContext.keys().forEach(requireContext);
};

addDecorator(StoryRouter());
addDecorator((story) => <CommonLayout>{story()}</CommonLayout>);

configure(loadStories, module);
