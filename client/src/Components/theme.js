import * as mui from 'material-ui';
const Colors = mui.Styles.Colors;
const ColorManipulator = mui.Utils.ColorManipulator;
const Spacing = mui.Styles.Spacing;

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.orange500,
    primary2Color: Colors.orange700,
    primary3Color: Colors.orange100,
    accent1Color: Colors.amber500,
    accent2Color: Colors.amber700,
    accent3Color: Colors.amber100,
    textColor: Colors.grey400,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
};
