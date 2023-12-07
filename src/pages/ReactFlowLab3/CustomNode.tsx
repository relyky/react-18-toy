import { useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { Handle, Position } from 'reactflow'
import type { NodeProps } from 'reactflow'
import styles from './CustomNode.module.css'

export default function CustomNode(props: NodeProps) {
    const { data } = props

    return (
        <div className={styles.custom_node}>
            <Handle type="target"
                position={Position.Top}
                isConnectable={props.isConnectable} />
            <div>
                <label>{data.label ?? 'unknow'}</label>
                <p>{data.amount}</p>
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={props.isConnectable} />
        </div>
    )
}
