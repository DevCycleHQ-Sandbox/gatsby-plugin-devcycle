import * as React from 'react'
import { Link, HeadFC, PageProps } from 'gatsby'
import { useVariableValue } from '@devcycle/devcycle-react-sdk'

const NotFoundPage: React.FC<PageProps> = () => {
    const showDemoBlock = useVariableValue('show-demo-block', false)
    return (
        <main>
            <h1>Page not found</h1>
            <p>
                Sorry {showDemoBlock ? 'DevCycle' : '😔'}, we couldn’t find what
                you were looking for.
                <br />
                {process.env.NODE_ENV === 'development' ? (
                    <>
                        <br />
                        Try creating a page in <code>src/pages/</code>.
                        <br />
                    </>
                ) : null}
                <br />
                <Link to="/">Go home</Link>.
            </p>
        </main>
    )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
