import React from 'react';
import { ImageContainer } from '../main/index';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('No options', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ImageContainer>
          <img src="" />
        </ImageContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ImageContainer block', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ImageContainer options={{ filter: 'walden' }}>
          <img src="" />
        </ImageContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('add property', () => {
  it('renders with right property', () => {
    const tree = renderer
      .create(
        <ImageContainer
          options={{
            filter: 'walden',
            hueRotate: '-20deg',
            contrast: '2',
            sepia: '0.5',
            saturate: '1',
          }}
        >
          <img src="" />
        </ImageContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
