import React, { Component } from 'react'
import {
  View,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,Button, ToastAndroid
} from 'react-native';
const authentication=require('../Themes/authentication.json')
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  constructor(props){
    super(props)
    this.state={
        username:'',
        password:''
    } 
}
goToEmployeedata(){
  if((this.state.username.trim()!='')){
    if((this.state.username== authentication.username) && (this.state.password == authentication.password)){
        const { dispatch } = this.props.navigation;
        dispatch({ type: 'Navigation/RESET', actions: [{ type: 'Navigate', routeName: 'EmployeeData' }], index: 0 })
        ToastAndroid.show(authentication.loginSucsess, ToastAndroid.SHORT);
    } 
    else {
        ToastAndroid.show(authentication.loginfailed, ToastAndroid.SHORT);
    }
}
else{
    ToastAndroid.show('Username cannot start with space', ToastAndroid.SHORT);

}
}
render() {
    return ( 
        <View style = {
            styles.container
        }>
        <TextInput style={styles.input}
        autoCapitalize="none"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        placeholder='Username'
        placeholderTextColor='#000'
        value={this.state.username}
        onChangeText={username=>this.setState({username: username})} />

    <TextInput style={styles.input}
        returnKeyType="go"
        ref={(input) => this.passwordInput = input}
        placeholder='Password'
        placeholderTextColor='#000'
        secureTextEntry
        value={this.state.password}
        onChangeText={password=>this.setState({password: password})}  />
        <Button
        title="Login"
        onPress={() =>
          this.goToEmployeedata()
        }
      />
        </View>
    );
      }
}
