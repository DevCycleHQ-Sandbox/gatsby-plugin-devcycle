import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { useVariableValue } from '@devcycle/devcycle-react-sdk'

const IndexPage: React.FC<PageProps> = ({ pageContext }) => {
    const showDemoBlock = useVariableValue('show-demo-block', false)
    return (
        <main>
            <h1>
                Congratulations {showDemoBlock && <>DevCycle {showDemoBlock}</>}
                <br />
                <span>— you just made a Gatsby site! 🎉🎉🎉</span>
            </h1>
            <p>
                Edit <code>src/pages/index.tsx</code> to see this page update in
                real-time. 😎
            </p>
        </main>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
