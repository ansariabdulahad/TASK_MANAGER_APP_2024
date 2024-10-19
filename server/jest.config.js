export default {
    transform: {
        "^.+\\.js$": "babel-jest"
    },
    testEnvironment: "node",
    setupFilesAfterEnv: ['./jest.setup.js'],
    testTimeout: 10000,
};
