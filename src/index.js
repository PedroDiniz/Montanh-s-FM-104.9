import React from 'react';

import CodePush from 'react-native-code-push';

import App from './App';

const Index = () => (
  <>
    <App />
  </>
);

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index);
