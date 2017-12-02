import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from './emp.service';

// 第三方套件
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
    ],
    declarations: [EmpComponent],
    providers: [
        EmpService,

        { provide: 'components', useValue: [EmpComponent], multi: true }
    ],
    entryComponents: [EmpComponent]
})

export class EmpModule {

}