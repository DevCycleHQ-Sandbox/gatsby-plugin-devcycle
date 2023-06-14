import React from 'react'
import PropTypes from 'prop-types'
import { withDVCProvider } from '@devcycle/devcycle-react-sdk'

// used client side, after hydration
export const wrapRootElement = ({ element }, pluginOptions) => {
    if (!pluginOptions.sdkKey) {
        console.warn(
            'DevCycle SDK `sdkKey` is not configured. See https://github.com/devcycle/gatsby-plugin-devcycle#installation'
        )
    }
    const App = () => <>{element}</>
    const DevCycleApp = withDVCProvider(pluginOptions)(App)
    return <DevCycleApp />
}
wrapRootElement.propTypes = {
    element: PropTypes.element.isRequired,
}
