import React from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import propTypes from 'prop-types';
import { View } from 'react-native';
import { isIphoneX } from '../../../helpers/is-iphone-x';

class StatusBarGapComponent extends React.Component {
  constructor(props) {
    super(props);

    this.props.options = this.props.options ? this.props.options : {};
  }

  render() {
    return (
      <View>
        {!!this.props.options.isVisible && <View
          style={{
            height: Platform.OS === 'ios' 
              ? isIphoneX ? 35 : 20
              : 0,
            backgroundColor: 'white',
            ...this.props.options
          }}
        ></View>}
      </View>
    );
  }
}

StatusBarGapComponent.propTypes = {
  options: propTypes.object
};

export default connect()(StatusBarGapComponent);