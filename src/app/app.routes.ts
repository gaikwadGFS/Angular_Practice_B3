import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
    {
        path:"student",
        component:StudentComponent
    },
    {
        path:'typescript',
        component:TypescriptComponent
    },
    {
        path:'structural_dir',
        component:StructuralDirectiveComponent
    },
    {
        path:'data_binding',
        component:DataBindingComponent
    },
    {
        path:'attribute_dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    }
];
