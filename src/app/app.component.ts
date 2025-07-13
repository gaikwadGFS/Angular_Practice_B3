import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentComponent, TypescriptComponent,DataBindingComponent,StructuralDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Batch3';
}
