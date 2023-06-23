import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Flying Birds';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('./FlyingBirds.ttf') format('ttf');
      }
      `}
  />
);

export default Fonts;
