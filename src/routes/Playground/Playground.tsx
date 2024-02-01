import styled from '@emotion/styled'

import PgCodeBlock from './PgCodeBlock'
import PgI18n from './PgI18n'

const Wrapper = styled('div')`
    margin: 0 20%;
    > h1 {
        text-align: center;
    }
    > section {
        border-bottom: 1px solid black;
    }
    > section:last-child {
        border-bottom: none;
    }
`

const Playground = () => {
    return (
        <Wrapper>
            <h1>Playground</h1>
            <PgCodeBlock />
            <PgI18n />
        </Wrapper>
    )
}

export default Playground
