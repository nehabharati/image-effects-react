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
          </Container>
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
          </Container>
        )
      }
```

## Available Properties

| Property         | Usage                       |
| ---------------- | --------------------------- |
| saturation       | saturation: '1.5'           |
| brightness       | brightness: '0.5'           |
| contrast         | contrast: '2'               |
| hue-rotate       | hueRotate: '-20deg'         |
| sepia            | sepia: '0.05'               |
| grayscale        | grayscale: '0.8'            |
| backgroundBefore | backgroundBefore: '#adadad' |
| backgroundAfter  | backgroundAfter: '#cfcfcf'  |

## Compatibility

- Google Chrome 43+  ✅
- Mozilla Firefox 38+  ✅
- Safari 8+ ✅
- Opera 32+  ✅
- Internet Explorer ❌
