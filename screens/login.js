import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
    };
  }

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        return alert('Successfully Login');
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  userSignUp = (emailId, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then((response) => {
        return alert('User Added Successfully');
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 1, height:300 }}>
        <Text
          style={{
            fontSize: 35,
            backgroundColor: 'blue',
            color: 'BLUE',
            marginTop: 1,
            height: 60,
            paddingTop: 4,
            paddingLeft: 5,
            textAlign:'center',
          }}>
          BARTER SYSTEM APP
        </Text>
        </View>

        
         <Image 
           style={{ width: 280, height: 200, marginTop:-200, alignSelf:'center'}}
            source={require('../assets/36609-man-working-at-the-computer.gif')}
          />

        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.loginBox}
            placeholder="ENTER EMAIL ID"
          
            keyboardType="email-address"
            onChangeText={(text) => {
              this.setState({
                emailId: text,
              });
            }}
          />

          <TextInput
            style={styles.loginBox}
            secureTextEntry={true}
            placeholder="Enter Password"
           
            onChangeText={(text) => {
              this.setState({
                password: text,
              });
            }}
          />
          <TouchableOpacity
            style={[styles.button, { marginBottom: 20, marginTop: 20 }]}
            onPress={() => {
              this.userLogin(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.userSignUp(this.state.emailId, this.state.password);
            }}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  loginBox: {
    width: 300,
    height: 40,
    borderWidth: 2,
    borderRadius: 50,
        borderColor: 'blue',
    fontSize: 25,
    margin: 10,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  button: {
    width: 300,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderTopColor: 'purple',
    borderBottomColor: 'red',
   borderWidth: 8,
   backgroundColor: 'orange',
    shadowColor: '#000',
  },
  buttonText: {
    color: 'black',
    fontWidth:200,
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
