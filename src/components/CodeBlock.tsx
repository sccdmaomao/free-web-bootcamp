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
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.35);
    }
`

const CopyButton = styled(IconButton)`
    position: absolute;
    color: black;
    right: 20%;
`

const CodeBlock: React.FC<{ codeString: string }> = ({ codeString }) => {
    return (
        <Wrapper>
            <CopyToClipboard text={codeString}>
                <CopyButton aria-label="copy">
                    <ContentCopyIcon fontSize="small" />
                </CopyButton>
            </CopyToClipboard>
            <SyntaxHighlighter
                language="javascript"
                style={docco}
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
