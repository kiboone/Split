import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Checkbox } from 'react-native-material-ui';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Split',
    };


    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
            <Button 
                style={styles.button}
                primary
                text="New Trip"
                onPress={() => navigate('CreateTrip', {name: 'Jane Doe'})}
            />
            <Button 
                style={styles.button}
                primary
                text="View Trips"
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
    button: {
        padding: '50px',
    }
  });

  export default HomeScreen;
  