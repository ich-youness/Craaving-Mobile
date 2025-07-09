import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import ProfileScreen from './profile'; // if you have one
// import { SettingsScreen } from './settings'; // if you have one

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}