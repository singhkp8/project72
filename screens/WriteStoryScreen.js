import React from 'react';
import { Text, View,TextInput,TouchableOpacity,StyleSheet,  KeyboardAvoidingView,
  ToastAndroid } from 'react-native';
import AppHeader from '../assets/AppHeader';
import * as firebase from 'firebase';
import db from '../config'

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      titletext: '',
      Authortext: '',
      storytext:'',
    };
  }
  submitStory = async() =>{
    await db.collection("storydetails").add({
     'title': this.state.titletext,
     'author': this.state.Authortext,
     'story': this.state.storytext
   })
   ToastAndroid.show("Story Saved To The Database", ToastAndroid.SHORT);
  }
    render() {
      return (           
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
          <AppHeader/>
          <TextInput
          style={styles.inputBox}
          placeholder="titlestory"
          onChangeText={(titletext) => {
            this.setState({ titletext: titletext });
          }}
          value={this.state.titletext}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Authorstory"
          onChangeText={(Authortext) => {
            this.setState({ Authortext: Authortext });
          }}
          value={this.state.Authortext}
        />
        <TextInput
          style={styles.inputBox1}
          placeholder="write a story"
          onChangeText={(storytext) => {
            this.setState({ storytext: storytext });
          }}
          value={this.state.storytext}
        />
          <TouchableOpacity style={styles.goButton}
           onPress={async()=>{
            this.submitStory();
            this.setState({
              titletext: '',
              Authortext: '',
              storytext: ''
            })
          }}
          >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
      );
    }
  }
const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    inputBox1: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 90,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      backgroundColor: 'Orange',
    },
  });
  