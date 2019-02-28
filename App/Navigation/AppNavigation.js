import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import EmployeeData from '../Containers/EmployeeData'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen,
  navigationOptions:{
    headerMode: 'none',
    title:'Login'
  } },
  EmployeeData:{screen:EmployeeData,
  navigationOptions:{
    headerMode:'float',
    title:'Employee Data'
  }}
}, {
  // Default config for all screens
  
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
