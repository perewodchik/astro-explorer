import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import TabOneScreen from '@pages/storybook/storybook-page';
import Main from '@pages/main/main';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from './types';

export default function Navigation() {
  return (
    <NavigationContainer
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {

    const isStorybookEnabled = true || process.env.STORYBOOK === 'true';

  return (
    <BottomTab.Navigator
      initialRouteName="Storybook"
    >
      {isStorybookEnabled && 
      <BottomTab.Screen
        name="Storybook"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'Storybook'>) => ({
          title: 'Storybook',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        })}
      />
      }
      <BottomTab.Screen
        name="Main"
        component={Main}
        options={{
          title: 'Main',
          tabBarIcon: ({ color }) => <TabBarIcon name="eye" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
