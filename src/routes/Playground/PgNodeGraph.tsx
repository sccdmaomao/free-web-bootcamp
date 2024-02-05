import { styled } from '@mui/material'
import ReactFlow from 'reactflow'

import PlaygroundSection from './PlaygroundSection'

const ReactFlowWrapper = styled('div')`
    height: 500px;
    .react-flow__attribution {
        display: none;
    }
`
const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { label: '1' },
    },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

const PgNodeGraph = () => {
    return (
        <PlaygroundSection sectionTitle="Node Graph">
            <ReactFlowWrapper>
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    fitView
                    preventScrolling
                    draggable={false}
                    zoomOnScroll={false}
                ></ReactFlow>
            </ReactFlowWrapper>
        </PlaygroundSection>
    )
}

export default PgNodeGraph
