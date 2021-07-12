module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                modules: false,
                targets: "> 0.25%, not dead"
            }
        ]
    ],
    "plugins": [
        "@vue/babel-plugin-transform-vue-jsx",
        ["@babel/plugin-transform-runtime", {
            corejs: 3,
            helpers: true
        }]
    ],
}
