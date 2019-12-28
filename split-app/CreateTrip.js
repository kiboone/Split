import React from 'react';
import { StyleSheet, Text, View, TextInput, Form, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Checkbox } from 'react-native-material-ui';


class CreateTrip extends React.Component {
    static navigationOptions = {
      title: 'Create New Trip',
    };

    constructor(props){
        super(props);
        this.state = {
            tripName: "",
            nights: 0,
            cost: 0,
        }
        this.goToAddPerson = this.goToAddPerson.bind(this);
    }
    
    goToAddPerson = (tripName, nights, cost) => {
        console.log(tripName, nights, cost)
        if(tripName !== "" && nights !== 0 && cost !== 0){
            this.props.navigation.navigate('AddPerson', {tripName: tripName, nights: nights, cost: cost})
        }else{
            Alert.alert('Please fill all options');
        }
    }

    render() {
      const {navigate} = this.props.navigation;
      const {tripName, nights, cost } = this.state;
      return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text>Trip Name: </Text>
                <TextInput
                    id="trip-name"
                    onChangeText={(text) => this.setState({tripName: text})}
                    style={styles.input}
                />
            </View>
            <View style={styles.row}>
                <Text>Number of Nights: </Text>
                <TextInput
                    id="num-days"
                    onChangeText={(text) => this.setState({nights: text})}
                    style={styles.input}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                />
            </View>
            <View style={styles.row}>
                <Text>Total Cost: $</Text>
                <TextInput
                    id="cost"
                    onChangeText={(text) => this.setState({cost: text})}
                    style={styles.input}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                />
            </View>
            <Button 
                primary
                text="Next"
                onPress={() => this.goToAddPerson(tripName, nights, cost)}
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
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 150,
    },
    row: {
        flexDirection: 'row',
        padding: 15,
    }
  });

  export default CreateTrip;
  