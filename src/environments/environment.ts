// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  food: [{
    id: 1,
    name: 'Nachos',
    description: 'Nachos smothered in cheese and jalepenos!',
    obtained: true,
    count: 1,
    users: [{
      name: 'Sally Smith',
      logo: '//ssl.gstatic.com/docs/common/profile/bat_lg.png'
    }]
  }, {
    id: 2,
    name: 'Paper Plates',
    description: 'Need something to put all this food on.',
    obtained: false,
    count: 5,
    users: [{
      name: 'Craig Robinson',
      logo: '//ssl.gstatic.com/docs/common/profile/frog_lg.png'
    }, {
      name: 'Adam Scott',
      logo: '//ssl.gstatic.com/docs/common/profile/panda_lg.png'
    }]
  }, {
    id: 3,
    name: '2-Liters of Soda',
    description: 'Coca-Cola, Sprite, Diet Coke, Dr. Pepper, Barq\'s Root Beer, and Mountain Dew',
    obtained: false,
    count: 6,
    users: [{
      name: 'Chris Kirkpatrick',
      logo: '//ssl.gstatic.com/docs/common/profile/quagga_lg.png'
    }, {
      name: 'Jennifer Johnson',
      logo: '//ssl.gstatic.com/docs/common/profile/kraken_lg.png'
    }, {
      name: 'Margaret Graves',
      logo: '//ssl.gstatic.com/docs/common/profile/dolphin_lg.png'
    }, {
      name: 'Sophie Holder',
      logo: '//ssl.gstatic.com/docs/common/profile/squirrel_lg.png'
    }]
  }]
};
