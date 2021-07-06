import styled from 'styled-components';
import { filterList } from './css/filterList';

export const Container = styled.figure`
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
