import { useCallback } from 'react'
import type { ChangeEvent } from 'react'
import { Handle, Position } from 'reactflow'
import type { NodeProps } from 'reactflow'
import styles from './TextUpdaterNode.module.css';

const handleStyle = { left: 10 };

function TextUpdaterNode(props: NodeProps) {
    const { data } = props

    // const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    //     console.log(evt.target.value);
    // }, []);

    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        console.log(evt.target.value);
    }

    return (
        <div className={styles["text-updater-node"]}>
            <Handle type="target" position={Position.Top} isConnectable={props.isConnectable} />
            <div>
                <label htmlFor="text">{data.label ?? 'Text'}</label>
                <input id="text" name="text" value={data.value} onChange={handleChange} className="nodrag" />
            </div>
            <Handle 
                type="source" 
                position={Position.Bottom} 
                isConnectable={props.isConnectable} />
        </div>
    );
}

export default TextUpdaterNode;
