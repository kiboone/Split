import React from 'react';
import { StyleSheet, Text, View, TextInput, Form } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Checkbox } from 'react-native-material-ui';


class CreateTrip extends React.Component {
    static navigationOptions = {
      title: 'Create New Trip',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <Text>Trip Name:</Text>
            <TextInput
                placeholder="Trip Name"
            />
            <Text>Number of Nights</Text>
            <TextInput
                placeholder="Number of Nights"
                keyboardType={'numeric'}
                returnKeyType='done'
            />
            <Text>Total Cost</Text>
            <TextInput
                placeholder="$"
                keyboardType={'numeric'}
                returnKeyType='done'
            />
            <Button 
                primary
                text="Add Person" 
            />
            <Button 
                primary
                text="Done" 
            />
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default CreateTrip;
  