import styled from '@emotion/styled'

import PgCodeBlock from './PgCodeBlock'
import PgFontAwesome from './PgFontAwesome'
import PgI18n from './PgI18n'
import PgNodeGraph from './PgNodeGraph'
import PgResponsive from './PgResponsive'

const Wrapper = styled('div')`
    margin: 0 20%;
    > h1 {
        text-align: center;
    }
    > section {
        border-bottom: 1px solid;
        padding-bottom: 1em;
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
            <PgResponsive />
            <PgFontAwesome />
            <PgNodeGraph />
        </Wrapper>
    )
}

export default Playground
