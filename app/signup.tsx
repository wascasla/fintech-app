import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles';
import { TextInput } from 'react-native-gesture-handler';

const Page = () => {

  const onSignup = async() => {};
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code there
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Mobile number' keyboardType='numeric' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row'
  },
  input: {},
})

export default Page