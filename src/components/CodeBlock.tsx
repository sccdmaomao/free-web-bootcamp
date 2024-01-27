import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButton } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
/**
 * Syntax highlighter
 */
const CodeBlock: React.FC<{ codeString: string }> = ({ codeString }) => {
    return (
        <div>
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
            >
                {codeString}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBlock
