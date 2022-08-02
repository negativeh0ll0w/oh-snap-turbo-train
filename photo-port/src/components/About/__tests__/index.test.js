import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import test component
import About from '..';

// configure testing environment
afterEach(cleanup);

// tests
describe('About component', () => {
      // First Test
    it('renders', () => {
        render(<About />);
    });

    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      });

  })