import React, { useEffect } from 'react'
import { Box, Paper, Typography } from '@mui/material'

const CustomNode = (props: any) => {
    const { data } = props
    return (
        <div style={{ background: '#717EC3', borderRadius: '8px' }}>
            <div style={{ padding: '4px 8px', color: 'white' }}>
                {data.title}
            </div>
            <div style={{ padding: '0 8px 4px 8px', color: 'white' }}>
                <span>{data.amount}</span>
            </div>
        </div>
    );
}

export default CustomNode