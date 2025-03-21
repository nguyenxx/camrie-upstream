import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { FaRegEdit, FaPencilAlt } from 'react-icons/fa';

import dayjs from 'dayjs';
import './DataGrid.css';

const columns = [
    { 
        field: 'filename', 
        headerName: 'File Name', 
        flex: 1, 
        align: 'left', 
        headerAlign: 'left',
        renderCell: (params) => (
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <span>{params.value}</span>
                <button 
                    className="edit-button" 
                    onClick={() => handleEdit(params.row)}
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                >
                    {/* <FaPencilAlt size={16} style={{ color: "rgba(0, 0, 0, 0.63)" }} /> */}
                    &nbsp;<FaRegEdit size={14} style={{ color: "rgba(0, 0, 0, 0.8)" }}/>
                </button>
            </div>
        ),
    },
    { field: 'dateUploaded', headerName: 'Date Uploaded', type: 'dateTime', width: 200,  align: 'right', headerAlign: 'right' },
];

const rows = [
    { id: 1, filename: 'Phantom2_Noise_MultipleReplicas_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 2, filename: 'Phantom2_Signal_MultipleReplicas_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 3, filename: 'Phantom2_Signal_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 4, filename: 'Phantom2_Noise_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 5, filename: 'Brain_Noise_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 6, filename: 'Brain_Signal_Replica2_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 7, filename: 'Brain_Signal_Replica1_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 8, filename: 'Phantom_Noise_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 9, filename: 'Phantom_Signal_Replica2_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 10, filename: 'Phantom_Signal_Replica1_Multislice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 11, filename: 'Phantom_Noise_SingleSlice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 12, filename: 'Phantom_Signal_SingleSlice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 13, filename: 'Brain_Noise_SingleSlice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
    { id: 14, filename: 'Brain_Signal_SingleSlice.dat', dateUploaded: dayjs("2025-02-09 11:40:34").toDate() },
];

const paginationModel = { page: 0, pageSize: 10 };

const StyledDataGrid = styled(DataGrid)({
    "--DataGrid-containerBackground": "transparent",
});

const handleEdit = (row) => {

    console.log("Edit clicked for:", row);
    alert(`Edit ${row.filename}`);
};

export default function DataTable({ isAccordionOpen, setSelectedRows}) {
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
        <div style={{ height: 600, width: '100%' }}>
            <StyledDataGrid
                key={gridKey} // Forces component re-initialization
                apiRef={apiRef}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel },
                }}
                pageSizeOptions={[10, 15]}
                checkboxSelection
                onRowSelectionModelChange={(selection) => setSelectedRows(selection)} // track row selection
            />
        </div>
    );
}
