import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#151617" barStyle="dark-content" />
      <WebView
        source={{uri: 'https://montanhesp4fm.com.br/'}}
        style={{height: 100}}
      />
    </Fragment>
  );
};

export default App;
