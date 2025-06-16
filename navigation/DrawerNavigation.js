import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './Routes';
import HomeScreen from '../src/screens/Home/HomeScreen';
import ProfileScreen from '../src/screens/Profile/ProfileScreen';
import SettingsScreen from '../src/screens/Settings/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.Home} component={HomeScreen} />

      <Drawer.Screen name={Routes.Profile} component={ProfileScreen} />

      <Drawer.Screen name={Routes.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
