import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: BlogsComponent
    },
    {
        path: 'article-details',
        component: BlogDetailComponent
    },
];
