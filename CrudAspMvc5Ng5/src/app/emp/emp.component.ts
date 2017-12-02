import { Component, OnInit } from '@angular/core';
import { Emp } from './emp';
import { EmpService } from './emp.service';


@Component({
    selector: 'emp-app',
    templateUrl: './emp.component.html',
    styles: []
})
export class EmpComponent implements OnInit {
    emp: Emp = { id: 0, firstName: '', lastName: '' };
    emps: Emp[];

    constructor(private empService: EmpService) { }

    ngOnInit(): void {
        this.empService.getAll()
            .subscribe(result => this.emps = result);
    }

    onAdd(): void {
        this.emp.id = 0;
        this.emp.firstName = this.emp.firstName.trim();
        if (!this.emp.firstName) {
            alert("firstName ¥²¶ñ");
            return;
        }
        if (!this.emp.lastName) {
            alert("lastName ¥²¶ñ");
            return;
        }

        this.empService.add(this.emp)
            .subscribe(emp => {
                this.emps.push(emp);
            });

        this.emp = { id: 0, firstName: '', lastName: '' };
    }

    onUpdate(): void {
        this.empService.update(this.emp)
            .subscribe(result => {
                let index = this.emps.findIndex((element, index, array) => element.id === this.emp.id);
                console.log(result);
                this.emps[index] = this.emp;
                alert("Update Success");
            });
    }

    onEdit(id: number): void {
        this.emp = Object.assign({}, this.emps.find((item, index, array) => item.id === id));
    }

    onDel(id: number): void {
        let emp = this.emps.find((item, index, array) => item.id === id);
        if (emp === undefined)
        {
            alert("NotFound");
            return;
        }

        this.empService.delete(emp).subscribe(result => {
            let index = this.emps.findIndex((element, index, array) => emp.id === id);
            this.emps.splice(index,1);
                alert("DeleteSuccess");
            }
        );
    }
}
