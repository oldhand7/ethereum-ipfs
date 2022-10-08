import * as React from 'react';
import {useContext,useEffect} from 'react';
import "../styles/register.css";
import { MDBDataTableV5 } from 'mdbreact';
import {UserContext} from '../context/UserContext';

const Backend = () => {
    const {getAllUsers} = useContext(UserContext);
    const [datatable, setDatatable] = React.useState({});
    useEffect(async () => {
        const data = await getAllUsers();
        const rlt = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'Name',
                },
            },
            {
                label: 'Email',
                field: 'email',
                width: 270,
            },
            {
                label: 'Sex',
                field: 'sex',
                width: 200,
            },
            {
                label: 'Adress',
                field: 'address',
                sort: 'disabled',
                width: 150,
            },
            ],
            rows: data,
        }
        setDatatable(rlt);
    }, []);
    return (
        <div className="rcontainer">
             <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />
        </div>
    )
}

export default Backend;