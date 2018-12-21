import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import StatusBarGapComponent from '../components/common/StatusBarGap/StatusBarGap';

export const sceneCreator = (SceneComp, store) =>
  () => 
    class SceneWrapper extends React.Component {
      constructor(props) {
        super(props);
      }

      static get options() {
        return SceneComp.options;
      }

      render() {
        return (
          <Provider store={store}>
            <View style={{ flex: 1 }}>
              { (SceneComp.options && SceneComp.options.statusBarGap != undefined)
                ? <StatusBarGapComponent options={SceneComp.options.statusBarGap} />
                : null }
              
              <SceneComp {...this.props} />
            </View>
          </Provider>
        );
      }
    };