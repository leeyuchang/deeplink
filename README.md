# deeplink

## npx uri-scheme open demo://app/home

## npx uri-scheme open demo://app/profile/100

## npx uri-scheme open demo://app/setting

```javascript
const config = {
  screens: {
    Home: 'home',
    Profile: {
      path: 'profile/:id',
      parse: {
        id: id => `${id}`,
      },
    },
    Notifications: 'notifications',
    Settings: 'setting',
  },
};

const linking = {
  prefixes: ['demo://app'],
  config,
};

export default linking;
```

---

```javascript
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  );
};
```

---

```javascript
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
```

![](./Profile.png =250x)
