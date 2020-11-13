
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './src/screens/splash';
import Login from './src/screens/login'; 
import WeatherReportList from './src/screens/weatherList';


const App=createStackNavigator({

  Splash:{screen:Splash,navigationOptions:{headerShown:false}},
  Login:{screen:Login,navigationOptions:{headerShown:false}},
  WeatherReportList:{screen:WeatherReportList,navigationOptions:{}}

});

// const mapStateToProps = state => ({
//   isloggedIn: state.isloggedIn,
// });
 
// const ActionCreators = Object.assign(
//   {},
//   isloggedIn,
// );
// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

 

//export default connect(mapStateToProps, mapDispatchToProps)createAppContainer(App);

export default createAppContainer(App);