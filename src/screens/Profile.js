import React from 'react';
import {Text, View} from 'react-native';
function Profile(props) {
  return (
    <View>
      <Text>Profile</Text>
      <Text>{JSON.stringify(props, null, 4)}</Text>
    </View>
  );
}

export default Profile;
