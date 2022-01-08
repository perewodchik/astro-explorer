import { AppRegistry } from 'react-native';
import { getStorybookUI, configure, addDecorator, } from '@storybook/react-native';
import { View } from 'react-native';

import { loadStories } from './storyLoader';

import './rn-addons';

// import stories
configure(() => {
  loadStories();
}, module);

addDecorator(story => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {story()}
    </View>
  ));

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;