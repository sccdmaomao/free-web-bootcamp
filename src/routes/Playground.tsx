import CodeBlock from 'components/CodeBlock'

const Playground = () => {
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
        <div>
            <section>
                <h3>Test Codeblocks</h3>
                <CodeBlock codeString="'(num) => num + 1';" />
                <CodeBlock codeString={longCodeString} />
            </section>
        </div>
    )
}

export default Playground
