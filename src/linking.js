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
