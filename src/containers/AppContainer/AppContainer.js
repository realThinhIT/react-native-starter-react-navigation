import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput } from 'react-native';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static get navigationOptions() {
    return {
      title: 'Home'
    };
  }

  static get options() {
    return {
      statusBarGap: {
        isVisible: true,
        backgroundColor: 'white'
      }
    };
  }

  render() {
    return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Text style={{
          fontSize: 20
        }}>
          Hello, {this.props.example.text ? this.props.example.text : `Unknown`}!
        </Text>

        <View style={{
          marginTop: 15
        }}>
          <Text>Please input your name:</Text>
          <TextInput
            onChangeText={newName => this.props.dispatch({ 
              type: `EXAMPLE_DISPATCH`,
              text: newName
            })}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
              textAlign: 'center'
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  example: state.example
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);