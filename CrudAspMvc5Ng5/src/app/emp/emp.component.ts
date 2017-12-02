import { Component } from '@angular/core';
import { Emp } from './emp';
import { EmpService } from './emp.service';

@Component({
    selector: 'emp-app',
    templateUrl: './emp.component.html',
    styles: []
})
export class EmpComponent {
    emp: Emp = { id: 0, firstName: 'Sky', lastName: 'Chang' };
    emps: Emp[];

    constructor(private empService: EmpService) { }

    ngOnInit(): void {
        this.empService.getAll().then(result => this.emps = result);
    }

    onAdd(): void {

    }

    onUpdate(): void {

    }

    onEdit(id: number): void {

    }

    onDel(id: number): void {

    }

    //onSelect(id: string): void {
    //    this.tradeDetailService.getTradeDetsils(id).then(result => this.tradeDetails = result);
    //}
}
