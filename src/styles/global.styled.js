import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import opensansRegular from 'static/fonts/opensans/OpenSans-Light.ttf'
import opensansBold from 'static/fonts/opensans/OpenSans-Semibold.ttf'
import proximaBold from 'static/fonts/Proxima Nova/Proxima Nova Bold.otf'
import theme from './theme.styled'

export default injectGlobal`
  ${normalize()};

  @font-face {
    font-family: ${theme.fonts.opensans.regular};
    src:
      local('OpenSans-Regular'),
      url("${opensansRegular}") format('truetype');
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.opensans.regular};
    src:
      local('OpenSans-Bold'),
      url("${opensansBold}") format('truetype');
    font-weight: 800;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.opensans.regular};
    src:
      local('OpenSans-Light'),
      url("${opensansBold}") format('truetype');
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: ${theme.fonts.proxima.bold};
    src:
        local('Proxima Nova-Bold'),
        url("${proximaBold}") format('truetype');
    font-weight: bold;
    font-display: swap;
  }

  @-ms-viewport {
    width: device-width;
    zoom: 1; }

  @-o-viewport {
    width: device-width;
    zoom: 1; }

  @viewport {
    width: device-width;
    zoom: 1; }

  body {
    font-family: ${theme.fonts.proxima.regular}, system, -apple-system,
    BlinkMacSystemFont, ".SFNSDisplay-Regular", Helvetica Neue,
    Lucida Grande, Arial, sans-serif;
    font-display: swap;
    color: ${theme.colors.fontDark};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: #f3f7fa;
    font-size: 14px;
  }

  p {
    font-size: ${theme.fontSize.extraSmall};
    line-height: 22px;
  }

  b {
    font-family: ${theme.fonts.proxima.bold};
  }

  a {
    color: unset;
  }
`
