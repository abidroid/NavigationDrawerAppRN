/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './navigation/DrawerNavigation';

function App() {

  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}


export default App;
