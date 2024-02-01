import styled from '@emotion/styled'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
/**
 * Syntax highlighter
 */

const Wrapper = styled('div')`
    border-radius: 10px 10px 10px 10px;
    &:hover {
        /* box-shadow: 1px 1px 10px 5px rgba(0, 0, 0, 0.75); */
    }
`
const CodeBlock: React.FC<{ codeString: string }> = ({ codeString }) => {
    return (
        <Wrapper>
            <CopyToClipboard text={codeString}>
                <IconButton aria-label="copy">
                    <ContentCopyIcon />
                </IconButton>
            </CopyToClipboard>
            <SyntaxHighlighter
                language="javascript"
                style={docco}
                showInlineLineNumbers
                showLineNumbers
                wrapLongLines
                customStyle={{ backgroundColor: '#f0f0f0' }}
            >
                {codeString}
            </SyntaxHighlighter>
        </Wrapper>
    )
}

export default CodeBlock
