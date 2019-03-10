import React from 'react';
import { View } from 'react-native';
import StatusBarGapComponent from '../components/common/StatusBarGap/StatusBarGap';

export const sceneCreator = (SceneComp) =>
  (class SceneWrapper extends React.Component {
    constructor(props) {
      super(props);
    }

    static get navigationOptions() {
      return SceneComp.navigationOptions;
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