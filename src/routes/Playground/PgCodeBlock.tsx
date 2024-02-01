import CodeBlock from 'components/CodeBlock'

import PlaygroundSection from './PlaygroundSection'

const PgCodeBlock = () => {
    // eslint-disable-next-line prettier/prettier
const longCodeString = 
`
import React from 'react'

const Component = () => {
    return <div>hello world</div>
}

export default Component
`
    return (
        <PlaygroundSection sectionTitle={'Code Blocks'}>
            <CodeBlock codeString="'(num) => num + 1';" />
            <CodeBlock codeString={longCodeString} />
        </PlaygroundSection>
    )
}

export default PgCodeBlock
