import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <Text>Hello! {this.props.example.text}</Text>

        <Button
          title={`Click here!`}
          onPress={() => this.props.dispatch({ type: `EXAMPLE_DISPATCH` })}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  example: state.example
});

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);