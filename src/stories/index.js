import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button'

storiesOf('Button', module)
    .add('StoryButtons', () => (
      [<Button
          onClick={action('Primary Button clicked')}
          title="Primary Button"
      />,
      <Button
          onClick={action('Secondary Button clicked')}
          title="Secondary Button"
          type="secondary"
      />,]
    ));