import {Component, Input} from '@angular/core';

@Component({
    selector: 'panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent {
    @Input() product: object;

    showDetail: boolean = false;

    hasAllData(product) {
        if (product.equipment_type && product.manufacturer) {
            return true;
        }
    }

    hasPhotos(product) {
        return Array.isArray(product.equipment_photos);
    }

    thumbnailPhoto(product) {
        return this.hasPhotos ? product.equipment_photos[0].thumbnail_url : '';
    }

    toggleDetail() {
        this.showDetail = !this.showDetail;
    }
}
