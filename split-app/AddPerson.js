import React from 'react';
import { StyleSheet, Text, View, TextInput, Form, FlatList, Dimensions, Alert } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Button, Checkbox } from 'react-native-material-ui';
import { Table, Row, Rows } from 'react-native-table-component';
 

class AddPerson extends React.Component {
    static navigationOptions = {
      title: 'Add People to Trip',
    };

    constructor(props){
        super(props);
        this.state = {
            list: [],
            name: "",
            numDays: 0,
            paid: 0,
        }
        this.addPerson = this.addPerson.bind(this);
    }

    addPerson = () => {
        const {list, name, numDays, paid} = this.state;
        if(name !== "" && numDays !== 0){
            var person = {name: name, numDays: numDays, paid: paid};
            var tempList = list;
            tempList.push(person);
            this.setState({list: tempList});
        } else {
            Alert.alert('Please fill all options')
        }
    }

    render() {
      const {navigate} = this.props.navigation;
      const {list} = this.state;
      const tripName = this.props.navigation.getParam('tripName', "NO-TRIP-NAME")
      const nights = this.props.navigation.getParam('nights', -1)
      const cost = this.props.navigation.getParam('cost', -1)
      return (
        <View style={styles.container}>
            {/* <Text>{tripName}</Text>
            <Text>{nights}</Text>
            <Text>{cost}</Text> */}
            <View style={styles.row}>
                <Text>Name: </Text>
                <TextInput
                    id="name"
                    onChangeText={(text) => this.setState({name: text})}
                    style={styles.input}
                />
            </View>
            <View style={styles.row}>
                <Text>Number of Nights Staying: </Text>
                <TextInput
                    id="num-days"
                    onChangeText={(text) => this.setState({numDays: text})}
                    style={styles.input}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                />
            </View>
            <View style={styles.row}>
                <Text>Amount Paid: $</Text>
                <TextInput
                    id="paid"
                    onChangeText={(text) => this.setState({paid: text})}
                    style={styles.input}
                    keyboardType={'numeric'}
                    returnKeyType='done'
                />
            </View>
            <Button 
                primary
                text="Add Person" 
                onPress={this.addPerson}
            />
            <View style={styles.list}>
                <FlatList
                    data={list}
                    renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                />
            </View>

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
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 150,
    },
    row: {
        flexDirection: 'row',
        padding: 15,
    },
    list: {
        height: 100,
        width: Dimensions.get('window').width,
        borderColor: 'black',
        borderWidth: 1,
    },
    item: {
        padding: 5,
        fontSize: 18,
        height: 44,
      },
  });

  export default AddPerson;
  