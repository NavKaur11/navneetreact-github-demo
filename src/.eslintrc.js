module.exports = {
    env: {
        browser: true,  // Allows browser globals
        es2021: true,   // Enables ES2021 features
        jest: true,     // Enables Jest globals
    },
    extends: [
        'eslint:recommended', // Uses recommended rules
        'plugin:react/recommended' // Uses recommended rules from @eslint-plugin-react
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true // Allows the parsing of JSX
        },
        ecmaVersion: 12, // Allows modern ECMAScript features
        sourceType: 'module' // Allows the use of imports
    },
    plugins: ['react'], // Uses the react plugin
    rules: {
        'react/prop-types': 'off', // Disable prop-types validation
        'no-unused-vars': ['warn'], // Warn on unused variables instead of error
        'no-undef': 'error' // Error on undefined variables
    },
    overrides: [
        {
            files: ['**/__tests__/**/*.js', '**/*.test.js'], // Specify test files
            env: {
                jest: true // Enable Jest globals for these files
            }
        }
    ]
};
