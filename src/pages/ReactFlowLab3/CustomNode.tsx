import { useEffect, useRef } from 'react'
import { Handle, Position } from 'reactflow'
import type { NodeProps } from 'reactflow'
import { useCountUp } from 'react-countup'
import styles from './CustomNode.module.css'

export default function CustomNode(props: NodeProps) {
    const { data } = props

    const countUpRef = useRef(null)
    const { update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 1000,
        duration: 1
    })

    useEffect(() => update(data.amount)
        , [data])

    return (
        <div className={styles.custom_node}>
            <Handle type="target"
                position={Position.Top}
                isConnectable={props.isConnectable} />
            <div>
                <label>{data.label ?? 'unknow'}</label>
                {/* <p>{data.amount}</p> */}
                <p ref={countUpRef} />
            </div>
            <Handle
                type="source"
                position={Position.Bottom}
                isConnectable={props.isConnectable} />
        </div>
    )
}
