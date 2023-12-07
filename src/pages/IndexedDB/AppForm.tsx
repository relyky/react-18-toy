import { useEffect, useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import { useIndexedDB } from 'react-indexed-db-hook'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import type { IMyEdge, IMyNode } from 'interface'

const nodeColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID' },
  { field: 'label', headerName: 'Label' },
  { field: 'group', headerName: 'Group' },
];

const edgeColumns: GridColDef[] = [
  { field: 'sn', headerName: 'SN' },
  { field: 'from', headerName: 'From' },
  { field: 'to', headerName: 'To' },
  { field: 'label', headerName: 'Label' },
  { field: 'group', headerName: 'Group' },
  { field: 'arrows', headerName: 'Arrows' },
];

export default function IndexedDB_AppForm() {
  const nodes = useIndexedDB('nodes');
  const edges = useIndexedDB('edges');
  const [nodeList, setNodeList] = useState<IMyNode[]>([]);
  const [edgeList, setEdgeList] = useState<IMyEdge[]>([]);
  const [f_toggle, setToggle] = useState<boolean>(false)

  useEffect(() => {
    nodes.getAll<IMyNode>().then(nodeList => setNodeList(nodeList));
    edges.getAll<IMyEdge>().then(edgeList => setEdgeList(edgeList));
  }, [f_toggle]);

  return (
    <Container>
      <Typography variant='h3'>IndexedDB</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>

          <Typography variant='h5'>Nodes</Typography>
          <DataGrid
            rows={nodeList}
            columns={nodeColumns}
            density="compact"
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />

        </Grid>
        <Grid item xs={12} md={6}>

          <Typography variant='h5'>Edges</Typography>
          <DataGrid
            rows={edgeList}
            columns={edgeColumns}
            getRowId={item => item.sn}
            density="compact"
            disableRowSelectionOnClick
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />

        </Grid>
      </Grid>


      <Button variant='contained' onClick={handleNewItem}>
        新增
      </Button>
      <Button variant='contained' color='error' onClick={handleClear}>
        清除
      </Button>

    </Container>
  )

  async function handleClear() {
    await edges.clear()
    await nodes.clear()
    setToggle(f => !f)
  }

  async function handleNewItem() {
    // add nodes
    await nodes.add({ id: 11, label: "約翰", group: "Person" });
    await nodes.add({ id: 12, label: "瑪莉", group: "Person" });
    await nodes.add({ id: 13, label: "愛麗絲", group: "Person" });
    await nodes.add({ id: 14, label: "雅各", group: "Person" });
    await nodes.add({ id: 15, label: "茱麗葉", group: "Person" });

    await nodes.add({ id: 21, label: "塔克戴爾", group: "Restaurant" });
    await nodes.add({ id: 22, label: "薑和香料", group: "Restaurant" });
    await nodes.add({ id: 23, label: "麵條樂園", group: "Restaurant" });

    await nodes.add({ id: 31, label: "貝爾維尤", group: "City" });
    await nodes.add({ id: 32, label: "西雅圖", group: "City" });
    await nodes.add({ id: 33, label: "雷德蒙", group: "City" });

    // add edges
    await edges.add({ from: 11, to: 21, group: "likes", label: "喜歡", arrows: 'to' });
    await edges.add({ from: 12, to: 22, group: "likes", label: "喜歡", arrows: 'to' });
    await edges.add({ from: 13, to: 23, group: "likes", label: "喜歡", arrows: 'to' });
    await edges.add({ from: 14, to: 23, group: "likes", label: "喜歡", arrows: 'to' });
    await edges.add({ from: 15, to: 21, group: "likes", label: "喜歡", arrows: 'to' });

    await edges.add({ from: 11, to: 31, group: "livesIn", label: "住在" });
    await edges.add({ from: 12, to: 32, group: "livesIn", label: "住在" });
    await edges.add({ from: 13, to: 33, group: "livesIn", label: "住在" });
    await edges.add({ from: 14, to: 33, group: "livesIn", label: "住在" });
    await edges.add({ from: 15, to: 33, group: "livesIn", label: "住在" });

    await edges.add({ from: 21, to: 31, group: "locatedIn", label: "位在" });
    await edges.add({ from: 22, to: 32, group: "locatedIn", label: "位在" });
    await edges.add({ from: 23, to: 33, group: "locatedIn", label: "位在" });

    await edges.add({ from: 11, to: 12, group: "friendOf", label: "朋友" });
    await edges.add({ from: 12, to: 13, group: "friendOf", label: "朋友" });
    await edges.add({ from: 13, to: 11, group: "friendOf", label: "朋友" });
    await edges.add({ from: 14, to: 12, group: "friendOf", label: "朋友" });
    await edges.add({ from: 15, to: 14, group: "friendOf", label: "朋友" });

    setToggle(f => !f);
  }
}
