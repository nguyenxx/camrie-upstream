import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import dayjs from 'dayjs';
import '../DataGrid/DataGrid.css'; 

const columns = [
    { field: 'jobId', headerName: 'Job ID', flex: 1, align: 'left', headerAlign: 'left' },
    { field: 'alias', headerName: 'Alias', flex: 1, align: 'left', headerAlign: 'left' },
    { 
        field: 'dateSubmitted', 
        headerName: 'Date Submitted', 
        type: 'dateTime', 
        flex: 1, 
        align: 'left', 
        headerAlign: 'left',
        valueFormatter: ({ value }) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'), // Format date using dayjs
    },
    { field: 'status', headerName: 'Status', flex: 1, align: 'left', headerAlign: 'left' },
    { 
        field: 'actions', 
        headerName: 'Actions', 
        renderCell: () => {
            return <div></div>; // Keep Actions column empty for now
        },
        width: 200, // Adjust width of the Actions column
    }
];

const rows = [
    // { id: 1, jobId: '001', alias: 'Job 1', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 2, jobId: '002', alias: 'Job 2', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Completed' },
    // { id: 3, jobId: '003', alias: 'Job 3', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 4, jobId: '004', alias: 'Job 4', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'In Progress' },
    // { id: 5, jobId: '005', alias: 'Job 5', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 6, jobId: '006', alias: 'Job 6', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Completed' },
    // { id: 7, jobId: '007', alias: 'Job 7', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'In Progress' },
    // { id: 8, jobId: '008', alias: 'Job 8', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 9, jobId: '009', alias: 'Job 9', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Completed' },
    // { id: 10, jobId: '010', alias: 'Job 10', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'In Progress' },
    // { id: 11, jobId: '011', alias: 'Job 11', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 12, jobId: '012', alias: 'Job 12', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Completed' },
    // { id: 13, jobId: '013', alias: 'Job 13', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'Pending' },
    // { id: 14, jobId: '014', alias: 'Job 14', dateSubmitted: dayjs("2025-02-09 11:40:34").toDate(), status: 'In Progress' },
];

const paginationModel = { page: 0, pageSize: 10 };

const StyledDataGrid = styled(DataGrid)(`
    --DataGrid-containerBackground: transparent;
`);

export default function JobsGrid({ isAccordionOpen }) {
    const apiRef = useGridApiRef();
    const [gridKey, setGridKey] = React.useState(0); // Used to force re-render

    React.useEffect(() => {
        if (isAccordionOpen) {
            setTimeout(() => {
                setGridKey(prevKey => prevKey + 1); // Force re-render to reapply flex: 1
            }, 200);
        }
    }, [isAccordionOpen]);

    return (
        <div style={{ height: 400, width: '100%' }}>
            <StyledDataGrid
                key={gridKey} // Forces component re-initialization
                apiRef={apiRef}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel },
                }}
                pageSizeOptions={[10, 15]}
            />
        </div>
    );
}

