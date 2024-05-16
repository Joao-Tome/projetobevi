/** @type {import('jest').Config} */
const config = {
    verbose: true,
    transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|@rneui)/)'],
};

module.exports = config;