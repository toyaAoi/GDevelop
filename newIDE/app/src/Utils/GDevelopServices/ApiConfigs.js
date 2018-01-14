// @flow
const isDev = process.env.NODE_ENV === 'development';

export const GDevelopHostingApi = {
  deployEndpoint:
    'https://nik50aqlp6.execute-api.eu-west-1.amazonaws.com/Production/deploy',
  gamesHost: 'http://gd-games.s3-website-eu-west-1.amazonaws.com',
};

const gdevelopGamesPreviewRegion = 'eu-west-1';
const gdevelopGamesPreviewBucket = 'gd-games-preview';

export const GDevelopGamesPreview = {
  destinationBucket: gdevelopGamesPreviewBucket,
  accessKeyId: process.env.REACT_APP_PREVIEW_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_PREVIEW_S3_SECRET_ACCESS_KEY,
  region: gdevelopGamesPreviewRegion,
  destinationBucketBaseUrl: `https://s3-${gdevelopGamesPreviewRegion}.amazonaws.com/${gdevelopGamesPreviewBucket}/`,
};

if (
  !GDevelopGamesPreview.accessKeyId ||
  !GDevelopGamesPreview.secretAccessKey
) {
  console.warn(
    "Either REACT_APP_PREVIEW_S3_ACCESS_KEY_ID or REACT_APP_PREVIEW_S3_SECRET_ACCESS_KEY are not defined. Preview in browsers won't be working"
  );
  console.info(
    'Copy .env.dist file to .env and fill the values to fix this warning.'
  );
}

export const GDevelopFirebaseConfig = {
  apiKey: "AIzaSyAnX9QMacrIl3yo4zkVFEVhDppGVDDewBc",
  authDomain: "gdevelop-services.firebaseapp.com",
  databaseURL: "https://gdevelop-services.firebaseio.com",
  projectId: "gdevelop-services",
  storageBucket: "gdevelop-services.appspot.com",
  messagingSenderId: "44882707384"
};;

export const GDevelopUsageApi = {
  baseUrl: isDev
    ? 'https://dwjjhr5k76.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://0sm32zmich.execute-api.us-east-1.amazonaws.com/live',
};

export const GDevelopBuildApi = {
  baseUrl: isDev
    ? 'https://ppvvhs48j1.execute-api.us-east-1.amazonaws.com/dev'
    : 'https://21fixz45y2.execute-api.us-east-1.amazonaws.com/live',
};

export const StripeCheckoutConfig = {
  key: isDev
    ? 'pk_test_4N7HfDWDds6ejCkxVM7fvvLr'
    : 'pk_live_4N7H3nYlkZV4ylpKlzhmM8fN',
  image:
    'https://raw.githubusercontent.com/4ian/GD/gh-pages/res/icon128linux.png',
};
