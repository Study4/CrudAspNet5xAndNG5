import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AboutComponent],
    providers: [
        { provide: 'components', useValue: [AboutComponent], multi: true }
    ],
    entryComponents: [AboutComponent]
})

export class AboutModule {

}