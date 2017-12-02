import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp.component';
import { HttpModule } from '@angular/http';

// 第三方套件
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
    ],
    declarations: [EmpComponent],
    providers: [
        { provide: 'components', useValue: [EmpComponent], multi: true }
    ],
    entryComponents: [EmpComponent]
})

export class EmpModule {

}