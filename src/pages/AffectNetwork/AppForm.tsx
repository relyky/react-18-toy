import { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import type { IVisNode, IVisEdge, INodeState, IAffectRelation } from 'interface'
import { Network, type Data } from 'vis-network'
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers'

export default function AffectNetwork_AppForm() {
  const visRef = useRef<HTMLDivElement>(null)
  const [stateList, setStateList] = useState<INodeState[]>([])
  const [affectList, setAffectList] = useState<IAffectRelation[]>([])

  const intervalHandler = useCallback(() => {
    console.log('ON:intervalHandler')
    affectList.forEach(affect => {
      const copyList = stateList.slice();
      const fromIdx = copyList.findIndex(c => c.id === affect.from)
      const toIdx = copyList.findIndex(c => c.id === affect.to)

      if (fromIdx >= 0 && toIdx >= 0) {
        copyList[fromIdx].value -= affect.shiftFrom
        copyList[toIdx].value += affect.shiftTo
        setStateList(copyList)
        console.log('ON:intervalHandler =>', copyList)
      }
    })
  }, [affectList, stateList]);

  useEffect(() => {
    setStateList([
      { id: 1, name: 'A', value: 100 },
      { id: 2, name: 'B', value: 100 },
      { id: 3, name: 'C', value: 100 },
    ]);

    setAffectList([
      { from: 1, to: 2, shiftFrom: 10, shiftTo: 20 },
      { from: 2, to: 3, shiftFrom: 10, shiftTo: 20 },
      { from: 3, to: 1, shiftFrom: 10, shiftTo: 20 },
    ]);

    const intervalId = setInterval(intervalHandler, 1000);
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    const nodes: IVisNode[] = stateList.map(item => ({
      id: item.id,
      label: `${item.name}\n${item.value}`
    }));

    const edges: IVisEdge[] = affectList.map(item => ({
      from: item.from,
      to: item.to,
      label: `${item.shiftFrom}/${item.shiftTo}`,
      arrows: 'to'
    }));

    const data: Data = {
      nodes,
      edges,
    };

    const options = {
      height: "calc(100vh - 160px)",
      //layout: {
      //  hierarchical: true
      //},
      //edges: {
      //  color: "#000000"
      //},
    };

    const network = new Network(visRef.current!, data, options);
    // Use `network` here to configure events, etc
  }, [visRef, stateList, affectList]);

  return (
    <Container>
      <Typography variant='h3'>Affect Network</Typography>
      <VisPanel ref={visRef} />
    </Container>
  )
}

//## helper Windgets ==========================================================
const VisPanel = styled.div`
  border: solid 1px blue;
`
