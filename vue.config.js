module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        additionalData(content, loaderContext) {
          const stylesToInject = [
            "@import '@/styles/settings/breakpoints.scss';",
            "@import '@/styles/settings/colors.scss';",
            "@import '@/styles/settings/unit.scss';",
          ].join('\n')
          return loaderContext.resourcePath.includes('/src/styles/settings')
            ? content
            : `${stylesToInject}${content}`
        },
      },
    },
  },
}
