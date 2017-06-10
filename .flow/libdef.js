declare var GLOBAL: any

declare module 'd3-scale' { declare var exports: any; }
declare module 'moxios' { declare var exports: any; }
declare module 'object-mapper' { declare var exports: any; }
declare module 'postal' { declare var exports: any; }
declare module 'prop-types' { declare var exports: any; }
declare module 'redux-logger' { declare var exports: any; }
declare module 'react-native' { declare var exports: any; }
declare module 'react-native-android-keyboard-adjust' { declare var exports: any; }
declare module 'react-native-animatable' { declare var exports: any; }
declare module 'react-native-collapsible' { declare var exports: any; }
declare module 'react-native-elements' { declare var exports: any; }
declare module 'react-native-i18n' { declare var exports: any; }
declare module 'react-native-material-kit' { declare var exports: any; }
declare module 'react-native-radio-buttons' { declare var exports: any; }
declare module 'react-native-segmented-control-tab' { declare var exports: any; }
declare module 'react-native-spinkit' { declare var exports: any; }
declare module 'react-native-svg' { declare var exports: any; }
declare module 'react-native-swipeout' { declare var exports: any; }
declare module 'react-native-viewpager' { declare var exports: any; }
declare module 'react-native-vector-icons' { declare var exports: any; }
declare module 'react-navigation' { declare var exports: any; }
declare module 'react-redux' { declare var exports: any; }
declare module 'redux-thunk' { declare var exports: any; }
declare module 'redux-mock-store' { declare var exports: any; }
declare module 'react-test-renderer' { declare var exports: any; }
declare module 'react-navigation' { declare var exports: any; }
declare module 'lodash' { declare var exports: any; }
declare module 'react-native-vector-icons/MaterialIcons' { declare var exports: any; }
declare module 'react-native-vector-icons/SimpleLineIcons' { declare var exports: any; }
declare module 'native-base' { declare var exports: any; }

// Temporarly create style types
declare module 'react-native/Libraries/StyleSheet/StyleSheet' {
  declare export type Styles = { [key: string]: Object };
  declare export type StyleSheet<S: Styles> = { [key: $Keys<S>]: number };
}
