# image-effects-react

This is a library used to add instagram filters to your images There
are a range of filters listed here to choose from. Filters Not enough?
No problem. Feel free to customize each filter by their properties

## Installation

`npm i images-effects-react`

## Usage

For more information, check out [this link](https://image-effects-react.vercel.app/).<br>
You can customize the filter by altering it's properties.

```
import { ImageContainer } from "image-effects-react"

    function addFilter() {
        return (
          <ImageContainer
            options={{
              filter: 'walden',
            }}
          >
            <img src='./image.png' alt="filter" />
          </ImageContainer>
        )
      }
```

Want to tweak these filters. Choose which properties for each filter you want to customize.

```
import { ImageContainer } from "image-effects-react"

      function addFilter() {
        return (
          <ImageContainer
            options={{
              filter: 'walden',
              hueRotate: '-20deg',
              contrast: '2',
              sepia: '0.5',
              saturate: '1'
            }}
          >
            <img src='./image.png' alt="filter" />
          </ImageContainer>
        )
      }
```

## Available Properties

| Property         | Description                                                       | Usage                       |
| ---------------- | ----------------------------------------------------------------- | --------------------------- |
| saturation       | Adjusts the saturation of an image                                | saturation: '1.5'           |
| brightness       | Adjusts the brightness of an image                                | brightness: '0.5'           |
| contrast         | Adjusts the contrast of an image                                  | contrast: '2'               |
| hue-rotate       | Applies a hue rotation to the image in degrees                    | hueRotate: '-20deg'         |
| sepia            | Adds sepia to an image                                            | sepia: '0.05'               |
| grayscale        | Converts the image to grayscale                                   | grayscale: '0.8'            |
| backgroundBefore | Adjust the background of an image with the :before pseudo element | backgroundBefore: '#adadad' |
| backgroundAfter  | Adjust the background of an image with the :after pseudo element  | backgroundAfter: '#cfcfcf'  |

For more information on these properties, here are some helpful links on
[pseudo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) and
[filter properties](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)

## Compatibility

- Google Chrome 43+  ✅
- Mozilla Firefox 38+  ✅
- Safari 8+ ✅
- Opera 32+  ✅
- Internet Explorer ❌
