import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";


@Component({
    selector: 'app-ag-grid',
    templateUrl: './ag-grid.component.html',
    styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

    private gridOptions: GridOptions = {};
    private data: any[]= [
        { id: 1, value: 10 },
        { id: 2, value: 20 },
        { id: 3, value: 30 },
        { id: 4, value: 40 }
    ];

    constructor() {

        this.gridOptions = {
        columnDefs: [
            { headerName: "Id", field: "id", width: 100 },
            { headerName: "Value", field: "value", width: 100 },
        ],
        rowData: this.data
    }
    
        console.log("data---" + JSON.stringify(this.data));
    }

    ngOnInit() {

    }

}
