import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, NgModuleFactory, SystemJsNgModuleLoader, Injector, Type, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, provideRoutes  } from '@angular/router';

// 共用服務
import { EmpService } from './emp/emp.service';



const routes: Routes = [
    {
        loadChildren: './emp/emp.module#EmpModule'
    },
    {
        loadChildren: './about/about.module#AboutModule'
    }]


//const entryComponents = [AboutComponent];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forChild(routes),
        //RouterModule.forRoot([
        //    //{
        //    //    path: '',
        //    //    redirectTo: '/emp',
        //    //    pathMatch: 'full'
        //    //},
        //    {
        //        path: 'emp',
        //        component: EmpComponent
        //    },
        //    {
        //        path: 'detail/:id',
        //        component: DetailComponent
        //    },
        //    {
        //        path: 'about',
        //        component: AboutComponent
        //    },
        //], { useHash: true })
    ],
    declarations: [],
    providers: [
        //provideRoutes(routes),
        SystemJsNgModuleLoader,
        EmpService],
    //entryComponents: [...entryComponents]
})
export class AppModule {

    // 感謝 Angular TW 的 Kevin 哥提供
    //constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
    //ngDoBootstrap(app: ApplicationRef) {
    //    entryComponents.forEach((component: any) => {
    //        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    //        if (document.querySelector(factory.selector)) {
    //            app.bootstrap(factory);
    //        }
    //    });
    //}

    constructor(private injector: Injector, private moduleLoader: SystemJsNgModuleLoader) { }

    ngDoBootstrap(appRef: ApplicationRef) {
        const widgets = document.querySelectorAll('[data-module-path]');
        for (const i in widgets) {
            if (widgets.hasOwnProperty(i)) {
                const modulePath = widgets[i].getAttribute('data-module-path');
                if (modulePath) {
                    this.moduleLoader.load(modulePath)
                        .then((moduleFactory: NgModuleFactory<any>) => {
                            const ngModuleRef = moduleFactory.create(this.injector);
                            ngModuleRef.injector.get('components').forEach((components: Type<{}>[]) => {
                                components.forEach((component: Type<{}>) => {
                                    const compFactory = ngModuleRef.componentFactoryResolver.resolveComponentFactory(component);
                                    if (document.querySelector(compFactory.selector)) {
                                        appRef.bootstrap(compFactory);
                                    }
                                });
                            });
                        });
                }
            }
        }
    }
}
