import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from 'Header';

storiesOf('MyComponent', module)
  .add('Default', () => (
    <Header />
  ));