
module.exports = {
  transpileDependencies: ["vuetify", 'vuetify/lib', 'vuetify/es5/components'],
  chainWebpack: config => {
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      progressiveImages: true
    }])
  }
};
