export function contrastBrightness(contrast, brightness) {
  return `
        contrast(${contrast}) 
        brightness(${brightness}) 
    `;
}

export function hueBrightness(hueRotate, brightness) {
  return `
        hue-rotate(${hueRotate}) 
        brightness(${brightness}) 
    `;
}

export function cbs(props) {
  return `
    -webkit-filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        saturate(${props.sat});
    
    filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        saturate(${props.sat});
    `;
}

export function cbsep(props) {
  return `
    -webkit-filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        sepia(${props.sepia});
    
    filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        sepia(${props.sepia});
    `;
}

export function hcbs(props) {
  return `
    -webkit-filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        hue-rotate(${props.hue})
        saturate(${props.sat});
    
    filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        hue-rotate(${props.hue})
        saturate(${props.sat});
    `;
}

export function cs(props) {
  return `
    -webkit-filter: 
        contrast(${props.contrast}) 
        sepia(${props.sepia});
    
    filter: 
        contrast(${props.contrast}) 
        sepia(${props.sepia});
    `;
}

export function csat(props) {
  return `
    -webkit-filter: 
        contrast(${props.contrast}) 
        saturate(${props.sat});
    
    filter: 
        contrast(${props.contrast}) 
        saturate(${props.sat});
    `;
}

export function scbsat(props) {
  return `
      -webkit-filter: 
          ${contrastBrightness(props.contrast, props.bright)}
          saturate(${props.sat})
          sepia(${props.sepia});
      
      filter:
          ${contrastBrightness(props.contrast, props.bright)}
          saturate(${props.sat})
          sepia(${props.sepia});
      `;
}

export function gcb(props) {
  return `
      -webkit-filter: 
          ${contrastBrightness(props.contrast, props.bright)}
          grayscale(${props.grayscale});
      
      filter: 
          ${contrastBrightness(props.contrast, props.bright)}
          grayscale(${props.grayscale});
      `;
}

export function hbss(props) {
  return `
      -webkit-filter: 
      ${hueBrightness(props.hueRotate, props.bright)}
        sepia(${props.sepia})
        saturate(${props.sat})
      
      filter: 
      ${hueBrightness(props.hueRotate, props.bright)}
        sepia(${props.sepia})
        saturate(${props.sat})
      `;
}

export function hb(props) {
  return `
      -webkit-filter: 
      ${hueBrightness(props.hueRotate, props.bright)}
      
      filter: 
      ${hueBrightness(props.hueRotate, props.bright)}
      `;
}

export function scbg(props) {
  return `
      -webkit-filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        sepia(${props.sepia})
        grayscale(${props.grayscale});
      
      filter: 
        ${contrastBrightness(props.contrast, props.bright)}
        sepia(${props.sepia})
        grayscale(${props.grayscale});
      `;
}

export function sb(props) {
  return `
      -webkit-filter: 
        saturation(${props.sat})
        bright(${props.bright});
      
      filter: 
        saturation(${props.sat})
        bright(${props.bright});
      `;
}
