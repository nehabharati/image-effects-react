import styled from 'styled-components';
import { filterList } from './css/filterList';

export const ImageContainer = styled.figure`
  width: 100%;
  height: 15rem;
  margin: 0;

  ${(props) => {
    let {
      saturation,
      brightness,
      contrast,
      sepia,
      grayscale,
      hueRotate,
      filter,
      backgroundBefore,
      backgroundAfter,
    } = props.options;

    return filterList[filter]({
      saturation,
      brightness,
      contrast,
      sepia,
      grayscale,
      hueRotate,
      backgroundBefore,
      backgroundAfter,
    });
  }}
`;

ImageContainer.defaultProps = {
  options: {
    saturation: 1.6,
    brightness: 1.1,
    contrast: undefined,
    sepia: 0.3,
    grayscale: undefined,
    hueRotate: '-10deg',
    filter: 'walden',
    backgroundBefore: undefined,
    backgroundAfter: undefined,
  },
};
