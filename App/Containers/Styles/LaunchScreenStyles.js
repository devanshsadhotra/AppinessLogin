import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    top: '50%',
    flex:1,
    bottom:0,
    
},
input: {
    height: 40,
    backgroundColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    color: '#000'
},
buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
},
buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
}
})
