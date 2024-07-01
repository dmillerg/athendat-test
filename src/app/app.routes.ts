import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.routes').then((m) => m.routes),
    },
    {
        path: 'blogs',
        loadChildren: () =>
            import('./pages/blogs/blogs.routes').then((m) => m.routes),
    },
    {
        path: 'poftfolio',
        loadChildren: () =>
            import('./pages/projects/projects.routes').then((m) => m.routes),
    }

];
