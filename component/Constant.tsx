import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export const COLOR = {
    primary: '#0FA3E2',
    title: '#333',
    detail: '#00000099',
    background: '#fff',
    border: "#bdbdbd",
    black: '#000000',
    lightBlack1: 'rgba(0,0,0,0.6)',
    lightBlack2: 'rgba(0,0,0,0.1)',
    lightGray1: 'rgba(82,82,82,0.8)',
    lightGray2: 'rgba(82,82,82,0.1)'
}

export const SIZES = {
    // global sizes
    radius: 12,
    padding: 24,
    base: 10,

    // font sizes
    largeTitle: 40,
    h1: 32,
    h2: 24,
    h3: 16,
    h4: 14,
    h5: 12,
    body1: 32,
    body2: 24,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const ICON = {
    // bottom tab
    home: require('../assets/icon/icons8-home-24.png'),
    home_f: require('../assets/icon/icons8-home-24_f.png'),
    explore: require('../assets/icon/icons8-explore-24.png'),
    explore_f: require('../assets/icon/icons8-explore-24_f.png'),
    user: require('../assets/icon/icons8-user-24.png'),
    user_f: require('../assets/icon/icons8-user-24_f.png'),

    //home
    clock: require('../assets/icon/icons8-time-24.png'),
    selectedImage: require('../assets/icon/icons8-image-24.png'),
    back: require('../assets/icon/icons8-back-24.png'),
    favorite: require('../assets/icon/icons8-favorite-24.png'),
    favorite_f: require('../assets/icon/icons8-favorite-24_f.png'),
    // profile
    editProfile: require('../assets/icon/icons8-registration-24.png'),
    setting: require('../assets/icon/icons8-settings-25.png'),
    changePassword: require('../assets/icon/icons8-password-reset-24.png'),
}

export const IMAGES = {
    // logo: require('../assets/image/logo.png'),
    // logoWhite: require('../assets/image/logoWhite.png'),
}