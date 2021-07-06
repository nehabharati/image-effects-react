import React from 'react';
import { Container } from '../main/index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('No options', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Container>
          <img src="" />
        </Container>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Container block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Container options={{ filter: 'walden' }}>
          <img src="" />
        </Container>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('add property', () => {
  it('renders with right property', () => {
    const tree = renderer
      .create(
        <Container
          options={{
            filter: 'walden',
            hueRotate: '-20deg',
            contrast: '2',
            sepia: '0.5',
            saturate: '1',
          }}
        >
          <img src="" />
        </Container>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
