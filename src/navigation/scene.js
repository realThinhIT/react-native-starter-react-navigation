import React from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import StatusBarGapComponent from '../components/common/StatusBarGap/StatusBarGap';

export const sceneCreator = (SceneComp) =>
  (class SceneWrapper extends React.Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions(...args) {
      if (_.isFunction(SceneComp.navigationOptions)) {
        return SceneComp.navigationOptions(...args);
      } else {
        return SceneComp.navigationOptions;
      }
    }

    static get options() {
      return SceneComp.options;
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          { (SceneComp.options && SceneComp.options.statusBarGap != undefined)
            ? <StatusBarGapComponent options={SceneComp.options.statusBarGap} />
            : null }
          
          <SceneComp {...this.props} />
        </View>
      );
    }
  });