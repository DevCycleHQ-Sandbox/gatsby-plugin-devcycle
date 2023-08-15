const { initializeDevCycle } = require('@devcycle/nodejs-server-sdk')

let dvcClient = null

exports.onPreInit = async (_, options) => {
    const dvcOptions = {}
    dvcClient = initializeDevCycle(options.sdkKey.server, dvcOptions)
    await dvcClient.onClientInitialized()
}

exports.onCreatePage = ({ page, actions }) => {
    // called for each page creation, resets each page on the fly
    // to have a `pageContext` prop with dvcVariable objects and
    // whatever else it had
    const user = {
        user_id: '<USER_ID>'
    }

    if (dvcClient) {
        const { createPage, deletePage } = actions
        deletePage(page)
        // You can access the variable "house" in your page queries now
        createPage({
            ...page,
            context: {
                ...page.context,
                ...dvcClient.allVariables(user),
            },
        })
    }
}
