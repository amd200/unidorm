import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import MenuProfile from '../../Components/User/MenuProfile'
import { Tag } from 'primereact/tag';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
function RecentBookings() {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const dt = useRef(null);


    const cols = [
        { field: 'code', header: 'Landlord Name', sortable: true },
        { field: 'name', header: 'Property Details', sortable: true },
        { field: 'category', header: 'Sent at', sortable: true },
        { field: 'inventoryStatus', header: 'Request Status', sortable: true },
        // { field: '', header: 'Options' },
    ];
    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);
    const statusBodyTemplate = (rowData) => {
        return <Tag value={rowData.inventoryStatus} severity={getProductSeverity(rowData)}></Tag>;
    };

    const getProductSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'Approved':
                return 'success';

            case 'Pending':
                return 'warning';

            case 'Declined':
                return 'danger';

            default:
                return null;
        }
    };
    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };
   
    const header = (
        <div className="d-flex align-items-center justify-content-between flex-wrap ">
            <h3 className='name-table'>Recent Bookings</h3>
            <div className='d-flex align-items-center gap-2'>
                <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
            </div>
        </div>
    );
    return (
        <div className="recent-bookings">
            <div className="bg-white">
                <Tooltip target=".export-buttons>button" position="bottom" />
                
                <DataTable selectionMode={null} selection={selectedProducts} onSelectionChange={(e) => setSelectedProducts(e.value)} dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} ref={dt} removableSort value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                    <Column bodyStyle={{ textAlign: 'center' }} selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                    {cols.map((col, index) => (
                        <Column key={index} bodyStyle={index === 1 ? {width: '10rem'} : { textAlign: 'center',width: '10rem' } } body={index === 3 ? statusBodyTemplate : null} sortable={col.sortable} field={col.field} header={col.header} />
                    ))}
                </DataTable>
            </div>
        </div>
    )
}

export default RecentBookings