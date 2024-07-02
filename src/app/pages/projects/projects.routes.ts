import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsDetailComponent } from './components/projects-detail/projects-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: 'single',
        component: ProjectsDetailComponent
    },
];
