/* eslint-disable import/prefer-default-export */
export const isMobile = () => {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
