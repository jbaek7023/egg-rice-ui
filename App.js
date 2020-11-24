import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from './src/screens/MainScreen';
import RefrigeScreen from './src/screens/RefrigeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainScreen,
    Refrige: RefrigeScreen, 
  },
  {
    initialRouteName: "Refrige",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
