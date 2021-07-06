import {
  cbs,
  hcbs,
  cs,
  csat,
  scbsat,
  gcb,
  hbss,
  hb,
  scbg,
  sb,
  cbsep,
  contrastBrightness,
} from '../customizeFunctions/customize';

export const filterList = {
  1977(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
        position: relative;
        ${cbs({
          sat: props.saturation ? props.saturation : 1.1,
          bright: props.brightness ? props.brightness : 1.1,
          contrast: props.contrast ? props.contrast : 1.1,
        })} 

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 15rem;
            top: 0;
            left: 0;
            position: absolute;
            pointer-events: none;
            z-index: 2;
          }
        
          &::after {
            content: '';
            display: block;
            width: 100%;
            height: 15rem;
            top: 0;
            left: 0;
            position: absolute;
            pointer-events: none;
            z-index: 3;
          }
        
          &::after {
            background: rgba(243, 106, 188, 0.3);
            mix-blend-mode: screen;
          }`;
  },
  aden(props) {
    return `
        img {
            width: 100%;
            height: 15rem;
            object-fit:cover;
            }
        position: relative;
        ${hcbs({
          hue: props.hueRotate ? props.hueRotate : '-20deg',
          sat: props.saturation ? props.saturation : 0.85,
          bright: props.brightness ? props.brightness : 1.2,
          contrast: props.contrast ? props.contrast : 0.9,
        })} 
      

        &:before {
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            pointer-events: none;
            z-index: 2; }
        
        &:after {
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
            pointer-events: none;
            z-index: 3; }
        
        &::after {
            background: -webkit-linear-gradient(left, rgba(66, 10, 14, 0.2), transparent);
            background: linear-gradient(to right, rgba(66, 10, 14, 0.2), transparent);
            mix-blend-mode: darken; }
    `;
  },
  amaro(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
        position: relative;
        z-index: 1;
        ${hcbs({
          hue: props.hueRotate ? props.hueRotate : '-10deg',
          sat: props.saturation ? props.saturation : 1.5,
          bright: props.brightness ? props.brightness : 1.1,
          contrast: props.contrast ? props.contrast : 0.9,
        })} 
        

        &::before,
        &::after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none; }

        &:before {
            z-index: 2; 
        }
        
        &:after {
            z-index: 3; 
        }

        &::after{
            mix-blend-mode: screen; 
        }
        `;
  },
  brannan(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    z-index: 1;
    ${cs({
      sepia: props.sepia ? props.sepia : 0.5,
      contrast: props.contrast ? props.contrast : 1.4,
    })} 

    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
    
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
    
    &::after {
      background-color: rgba(161, 44, 199, 0.31);
      mix-blend-mode: lighten; }
`;
  },
  clarendon(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${csat({
      sat: props.saturation ? props.saturation : 1.35,
      contrast: props.contrast ? props.contrast : 1.2,
    })} 
   
    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
    
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
    
    &:before {
      background: rgba(127, 187, 227, 0.2);
      mix-blend-mode: overlay; }
`;
  },
  earlyBird(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${cs({
      sepia: props.sepia ? props.sepia : 0.2,
      contrast: props.contrast ? props.contrast : 0.9,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
      
      &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
      
      &::after {
        background: -webkit-radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);
        background: radial-gradient(circle, #d0ba8e 20%, #360309 85%, #1d0210 100%);
        mix-blend-mode: overlay; }
`;
  },
  gingham(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${hb({
      bright: props.brightness ? props.brightness : 1.1,
      hueRotate: props.hueRotate ? props.hueRotate : '-10deg',
    })} 

    &:before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: 2; }
    
    &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: 3; }
    
    &::after {
    background: lavender;
    mix-blend-mode: soft-light; }
  `;
  },
  hudson(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${cbs({
      sat: props.saturation ? props.saturation : 1.1,
      bright: props.brightness ? props.brightness : 1.2,
      contrast: props.contrast ? props.contrast : 0.9,
    })} 
   

    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
    
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
    
    &::after {
      background: -webkit-radial-gradient(circle, #a6b1ff 50%, #342134);
      background: radial-gradient(circle, #a6b1ff 50%, #342134);
      mix-blend-mode: multiply;
      opacity: .5; }
  `;
  },
  inkwell(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${scbg({
      sepia: props.sepia ? props.sepia : 0.3,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 1.1,
      grayscale: props.grayscale ? props.grayscale : 1,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
        
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
`;
  },
  kelvin(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;

    &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
    
    &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
    
    &::after {
      background: ${props.backgroundAfter ? props.backgroundAfter : '#b77d21'};

      mix-blend-mode: overlay; }
    
    &::before {
      background: ${
        props.backgroundBefore ? props.backgroundBefore : '#382c34'
      };
      mix-blend-mode: color-dodge; }
`;
  },
  lark(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    -webkit-filter: contrast(${props.contrast ? props.contrast : 0.9});
    filter: contrast(${props.contrast ? props.contrast : 0.9});

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
      
      &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
      
      &::after {
        background: rgba(242, 242, 242, 0.8);
        mix-blend-mode: darken; }
      
      &::before {
        background: #22253f;
        mix-blend-mode: color-dodge; }
`;
  },
  lofi(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${csat({
      sat: props.saturation ? props.saturation : 1.1,
      contrast: props.contrast ? props.contrast : 1.5,
    })} 
 
    &before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
  
  &after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
  
  &:after {
      background: -webkit-radial-gradient(circle, transparent 70%, #222222 150%);
      background: radial-gradient(circle, transparent 70%, #222222 150%);
      mix-blend-mode: multiply; }
`;
  },
  maven(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${scbsat({
      sat: props.saturation ? props.saturation : 1.5,
      bright: props.brightness ? props.brightness : 0.95,
      contrast: props.contrast ? props.contrast : 0.95,
      sepia: props.sepia ? props.sepia : 0.25,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
        
        &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
        
        &:after {
        background: rgba(3, 230, 26, 0.2);
        mix-blend-mode: hue; }
    `;
  },
  mayfair(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${csat({
      sat: props.saturation ? props.saturation : 1.1,
      contrast: props.contrast ? props.contrast : 1.1,
    })} 
  

   &:before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 2; }
    
   &:after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      pointer-events: none;
      z-index: 3; }
    
   &::after {
      background: -webkit-radial-gradient(40% 40%, circle, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%);
      background: radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.8), rgba(255, 200, 200, 0.6), #111111 60%);
      mix-blend-mode: overlay;
      opacity: .4; }
    `;
  },
  moon(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${gcb({
      grayscale: props.grayscale ? props.grayscale : 1,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 1.1,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
        
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
        
    &::before {
        background: #a0a0a0;
        mix-blend-mode: soft-light; }
        
    &::after {
        background: #383838;
        mix-blend-mode: lighten; }
    `;
  },
  nashville(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${scbsat({
      sat: props.saturation ? props.saturation : 1.2,
      bright: props.brightness ? props.brightness : 1.05,
      contrast: props.contrast ? props.contrast : 1.2,
      sepia: props.sepia ? props.sepia : 0.2,
    })} 

    &:before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: 2; }

    &:after {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    pointer-events: none;
    z-index: 3; }

    &::after {
    background: rgba(0, 70, 150, 0.4);
    mix-blend-mode: lighten; }

    &::before {
    background: rgba(247, 176, 153, 0.56);
    mix-blend-mode: darken; }
      `;
  },
  perpetua() {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
      
      &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
      
      &::after {
        background: -webkit-linear-gradient(top, #005b9a, #e6c13d);
        background: linear-gradient(to bottom, #005b9a, #e6c13d);
        mix-blend-mode: soft-light;
        opacity: .5; }
`;
  },
  reyes(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${scbsat({
      sat: props.saturation ? props.saturation : 0.75,
      bright: props.brightness ? props.brightness : 1.1,
      contrast: props.contrast ? props.contrast : 0.85,
      sepia: props.sepia ? props.sepia : 0.22,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
    
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    &::after {
        background: #efcdad;
        mix-blend-mode: soft-light;
        opacity: .5; }
`;
  },
  rise(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${scbsat({
      sat: props.saturation ? props.saturation : 0.9,
      bright: props.brightness ? props.brightness : 1.05,
      contrast: props.contrast ? props.contrast : 0.9,
      sepia: props.sepia ? props.sepia : 0.2,
    })} 
  
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }

    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }

    &::after {
        background: -webkit-radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);
        background: radial-gradient(circle, rgba(232, 197, 152, 0.8), transparent 90%);
        mix-blend-mode: overlay;
        opacity: .6; }

    &::before {
        background: -webkit-radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));
        background: radial-gradient(circle, rgba(236, 205, 169, 0.15) 55%, rgba(50, 30, 7, 0.4));
        mix-blend-mode: multiply; }
    `;
  },
  slumber(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${sb({
      sat: props.saturation ? props.saturation : 0.66,
      bright: props.brightness ? props.brightness : 1.05,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
        
    .&:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    .&::after {
        background: rgba(125, 105, 24, 0.5);
        mix-blend-mode: soft-light; }
    
    .&::before {
        background: rgba(69, 41, 12, 0.4);
        mix-blend-mode: lighten; }
    `;
  },
  stinson(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${cbs({
      sat: props.saturation ? props.saturation : 0.85,
      bright: props.brightness ? props.brightness : 1.15,
      contrast: props.contrast ? props.contrast : 0.75,
    })} 
   

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
    
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    &::before {
        background: rgba(240, 149, 128, 0.2);
        mix-blend-mode: soft-light;
  `;
  },
  toaster(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${contrastBrightness(props.brightness, props.contrast)}

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
        
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
        
    &::after {
        background: -webkit-radial-gradient(circle, #804e0f, #3b003b);
        background: radial-gradient(circle, #804e0f, #3b003b);
        mix-blend-mode: screen; }
`;
  },
  valencia(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${cbsep({
      sepia: props.sepia ? props.sepia : 0.08,
      bright: props.brightness ? props.brightness : 1.08,
      contrast: props.contrast ? props.contrast : 1.08,
    })} 

    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
    
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    &::after {
        background: #3a0339;
        mix-blend-mode: exclusion;
        opacity: .5; }
  `;
  },
  walden(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${hbss({
      sat: props.saturation ? props.saturation : 1.6,
      sepia: props.sepia ? props.sepia : 0.3,
      bright: props.brightness ? props.brightness : 1.1,
      hueRotate: props.hueRotate ? props.hueRotate : '-10deg',
    })} 
  
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
      
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
      
    &::after {
        background: #0044cc;
        mix-blend-mode: screen;
        opacity: .3; }
  `;
  },
  willow(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
    position: relative;
    ${gcb({
      grayscale: props.grayscale ? props.grayscale : 0.5,
      bright: props.brightness ? props.brightness : 0.9,
      contrast: props.contrast ? props.contrast : 0.95,
    })} 
        
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
    
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    &::before {
        background-color: radial-gradient(40%, circle, #d4a9af 55%, black 150%);
        mix-blend-mode: overlay; }
    
    &::after {
        background-color: #d8cdcb;
        mix-blend-mode: color; }
    `;
  },
  xpro(props) {
    return `
        img {
            width: 100%;
            height: 15rem; object-fit: cover;
            }
        position: relative;
        -webkit-filter: sepia(${props.sepia ? props.sepia : 0.3});
        filter: sepia(${props.sepia ? props.sepia : 0.3}); 
            
    &:before {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 2; }
    
    &:after {
        content: '';
        display: block;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        position: absolute;
        pointer-events: none;
        z-index: 3; }
    
    &::after {
        background: -webkit-radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);
        background: radial-gradient(circle, #e6e7e0 40%, rgba(43, 42, 161, 0.6) 110%);
        mix-blend-mode: color-burn; }
        `;
  },
};
