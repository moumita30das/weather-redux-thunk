
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './screens/Splash';
import Login from './screens/login'; 
import WeatherReportList from './screens/weatherList';

const App=createStackNavigator({

  Splash:{screen:Splash,navigationOptions:{headerShown:false}},
  Login:{screen:Login,navigationOptions:{headerShown:false}},
  WeatherReportList:{screen:WeatherReportList,navigationOptions:{}}

});

export default createAppContainer(App);