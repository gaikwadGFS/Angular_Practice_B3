import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/Forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/Forms/reactive-form/reactive-form.component';
import { ImagesComponent } from './components/images/images.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [

    // deafult route

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: "student",
                component: StudentComponent
            },
            {
                path: 'typescript',
                component: TypescriptComponent
            },
            {
                path: 'structural_dir',
                component: StructuralDirectiveComponent
            },
            {
                path: 'data_binding',
                component: DataBindingComponent
            },
            {
                path: 'attribute_dir',
                component: AttributeDirectiveComponent
            },
            {
                path: 'pipe',
                component: PipeComponent
            },
            {
                path: 'templateForm',
                component: TemplateFormComponent
            },
            {
                path: 'reactiveForm',
                component: ReactiveFormComponent
            },
            {
                path: 'image',
                component: ImagesComponent
            },
            {
                path: 'api',
                component: ApiIntegrationComponent
            }

        ]
    }

];
