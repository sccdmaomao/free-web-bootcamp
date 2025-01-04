import CodeBlock from 'components/CodeBlock'

import PlaygroundSection from './PlaygroundSection'

const oneLiner = '(num) => num + 1;'

const longCodeString = `import React from 'react'

const Component = () => {
    return <div>hello world</div>
}

export default Component`

const PgCodeBlock = () => {
    // eslint-disable-next-line prettier/prettier

    return (
        <PlaygroundSection sectionTitle={'Code Blocks'}>
            <CodeBlock codeString={oneLiner} />
            <CodeBlock codeString={longCodeString} />
        </PlaygroundSection>
    )
}

export default PgCodeBlock
