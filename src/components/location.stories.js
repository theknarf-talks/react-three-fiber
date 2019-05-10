import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Location from './location';

const stories = storiesOf('Component|Location', module);

stories.add('Primary', () =>
	<Location />
);

stories.add('With pathname', () =>
	<Location withPathname={true} />
);
