import React from 'react'
import PropTypes from 'prop-types'
import { useIsDevCycleInitialized, withDevCycleProvider } from '@devcycle/react-client-sdk'

export const wrapRootElement = ({ element }, pluginOptions) => {
    const sdkKey = pluginOptions.sdkKey.client
    if (!sdkKey) {
        console.warn(
            'DevCycle SDK `sdkKey` is not configured. See https://github.com/devcycle/gatsby-plugin-devcycle#installation'
        )
    }
    const App = () => {
        return <>{element}</>
    }
    const DevCycleApp = withDevCycleProvider({ 
        sdkKey,
        options: {
            logLevel: 'debug'
        } 
    })(App)
    return <DevCycleApp />
}
wrapRootElement.propTypes = {
    element: PropTypes.element.isRequired,
}
