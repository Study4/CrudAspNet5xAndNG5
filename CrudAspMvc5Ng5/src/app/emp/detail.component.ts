import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Emp } from './emp';
import { EmpService } from './emp.service';

@Component({
    selector: 'detail-app',
    templateUrl: './detail.component.html',
    styles: []
})
export class DetailComponent implements OnInit {
    emp: Emp;

    constructor(
        private empService: EmpService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.empService.get(+params.get('id')))
            .subscribe(data => this.emp = data);
    }

    goBack(): void {
        this.location.back();
    }

}
