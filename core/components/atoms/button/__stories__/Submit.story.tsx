import * as React from 'react';
import Button from '../Button';

export const submit = () => (
  <Button
    appearance="primary"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
  >
    Submit
  </Button>
);

export default {
  title: 'Atoms|Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
