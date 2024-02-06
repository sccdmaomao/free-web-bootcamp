import { styled } from '@mui/material'
import { useState } from 'react'
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
    const [interactivity, setInteractivity] = useState(false)
    return (
        <PlaygroundSection sectionTitle="Node Graph" showBorder>
            Graph Interactivity
            <label>
                <input
                    id="interactivity-false"
                    type="radio"
                    name="interactivity"
                    checked={interactivity}
                    onChange={() => setInteractivity(true)}
                />
                True
            </label>
            <label>
                <input
                    id="interactivity-true"
                    type="radio"
                    name="interactivity"
                    checked={!interactivity}
                    onChange={() => setInteractivity(false)}
                ></input>
                False
            </label>
            <ReactFlowWrapper>
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    fitView
                    preventScrolling
                    draggable={interactivity}
                    panOnDrag={interactivity}
                    zoomOnScroll={interactivity}
                    contentEditable={interactivity}
                    edgesUpdatable={interactivity}
                    nodesDraggable={interactivity}
                    nodesConnectable={interactivity}
                    elementsSelectable={interactivity}
                ></ReactFlow>
            </ReactFlowWrapper>
        </PlaygroundSection>
    )
}

export default PgNodeGraph
