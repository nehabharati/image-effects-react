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
            <img src='https://images.unsplash.com/photo-1617839697885-0a4b5a127c56?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYyNTM4Mzc2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="picture" />
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
            <img src='https://images.unsplash.com/photo-1617839697885-0a4b5a127c56?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bmF0dXJlLHdhdGVyfHx8fHx8MTYyNTM4Mzc2OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600' alt="picture" />
          </ImageContainer>
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
