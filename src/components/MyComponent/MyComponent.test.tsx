import { render } from '@testing-library/react';
import { createMount } from '@material-ui/core/test-utils';
import MyComponent from './MyComponent';

describe('<MyComponent />', () => {
  let mount;

  beforeAll(() => {
    mount = createMount();
  });

  it('should work', () => {
    const wrapper = mount(<MyComponent />);
  });
});
