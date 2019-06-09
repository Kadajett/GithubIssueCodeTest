// import { styled } from 'styled-components';
export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };


function pxToInt(px) {
    if(px.indexOf('px') < 0) return 0;

    return parseInt(px.replace('px', ''));
};
export const minMediaQuery = (size) => {
    let innerWidth = window.innerWidth;
    let intSize = pxToInt(size);
    if(!intSize) return false;

    if(innerWidth >= intSize) return true;


    return false;
}

export const font = {
    small: '12px',
    medium: '16px',
    large: '20px'
};
