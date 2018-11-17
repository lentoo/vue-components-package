module.exports = {
  presets: [
    '@vue/app',
    // [{ modules: false}]
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "../src",
        "styleLibraryName": "theme-chalk",
        "libraryDirectory": "components"
        // "root": ["@/components"],
        // "alias": {
        //   "@/components": "main/lib"
        // }？？
      }
    ]
  ]
}
