import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styles from './styles.sass';

import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('StoryButton', () => (
      <Button
          onClick={action('Button clicked')}
          className={styles.story_button}
      >
          Button
      </Button>
  ));