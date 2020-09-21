import { HttpClient } from '@angular/common/http';
import {Component, ContentChildren, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import {PanelComponent} from '../panel/panel.component';

@Component({
    selector: 'app-equipment',
    templateUrl: './equipmentList.component.html',
    styleUrls: ['./equipmentList.component.css']
})
export class EquipmentListComponent implements OnInit {
    @ContentChildren(PanelComponent)

    equipment = [];
    errors: boolean = false;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.httpClient.get(`${environment.apiUrl}/equipment`)
            .subscribe(
                (data: any[]) => {
                    let activeEquipment = data.filter(product => product.active);
                    this.equipment = activeEquipment;
                    console.log(this.equipment);
                },
                error => {
                    console.log(error);
                    this.errors = true;
                }
                
            );
    }
}
