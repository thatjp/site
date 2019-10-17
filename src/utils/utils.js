/* eslint-disable import/prefer-default-export */
export const isMobile = () => (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);

export const generateKey = pre => `${pre}_${Math.random()}`;
