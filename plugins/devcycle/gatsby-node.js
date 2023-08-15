const { initialize } = require('@devcycle/devcycle-js-sdk')

let dvcClient = null

exports.onPreInit = async (_, options) => {
    const user = {}
    const dvcOptions = {}
    dvcClient = initialize(options.sdkKey, user, dvcOptions)
    await dvcClient.onClientInitialized()
}

exports.onCreatePage = ({ page, actions }) => {
    // called for each page creation, resets each page on the fly
    // to have a `pageContext` prop with dvcVariable objects and
    // whatever else it had
    if (dvcClient) {
        const { createPage, deletePage } = actions
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
}
