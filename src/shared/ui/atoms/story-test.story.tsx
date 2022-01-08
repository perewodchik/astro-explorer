import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { Text, View } from 'react-native';

storiesOf('ui/atoms', module).add('storyTest', () => (
  <View>
      <Text style={{textAlign: "center"}}>{text('content', "test")}</Text>
  </View>

));