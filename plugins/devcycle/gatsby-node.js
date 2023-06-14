const { initialize } = require('@devcycle/devcycle-js-sdk')

exports.onCreatePage = async ({ page, actions }, options) => {
    // called for each page creation, resets each page on the fly
    // to have a `pageContext` prop with dvcVariable objects and
    // whatever else it had
    const { createPage, deletePage } = actions
    const user = {}
    const dvcOptions = {}
    const dvcClient = initialize(options.sdkKey, user, dvcOptions)
    await dvcClient.onClientInitialized()

    deletePage(page)
    // You can access the variable "house" in your page queries now
    createPage({
        ...page,
        context: {
            ...page.context,
            ...dvcClient.allVariables(),
        },
    })
}
