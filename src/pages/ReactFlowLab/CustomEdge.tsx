import { useCallback } from 'react';
import type { CSSProperties } from 'react'
import { BaseEdge, getBezierPath , EdgeLabelRenderer, useReactFlow } from 'reactflow'
import type { EdgeProps } from 'reactflow'

export default function CustomEdge(props: EdgeProps) {
    const { setEdges } = useReactFlow()
    const [edgePath, labelX, labelY] = getBezierPath (props);

    const handleRemove = useCallback(() => {
        setEdges((edges) => edges.filter((edge) => edge.id !== props.id))
    }, [setEdges])

    const buttonStyle: CSSProperties = {
        position: 'absolute',
        transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
        pointerEvents: 'all',
    }

    return (
        <>
            <BaseEdge id={props.id} path={edgePath} />
            <EdgeLabelRenderer>
                <button onClick={handleRemove} style={buttonStyle}>delete</button>
            </EdgeLabelRenderer>
        </>
    )
}