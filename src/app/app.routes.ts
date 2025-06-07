import { Routes } from '@angular/router';
import { HomeComponent } from './main-components/home-component/home-component.component';
import { UserComponent } from './main-components/user-component/user-component.component';
import { UsersComponent } from './main-components/users-component/users-component.component';
import { CourseMainComponent } from './main-components/courses/course-main/course-main.component';
import { ReactiveFromsComponent } from './main-components/reactive-froms/reactive-froms.component';
import { TemplateFromsComponent } from './main-components/template-froms/template-froms.component';
import { LifeCycleComponent } from './main-components/life-cycle/life-cycle.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'course', component: CourseMainComponent },
    { path: 'reactive', component: ReactiveFromsComponent },
    { path: 'template', component: TemplateFromsComponent },
    { path: 'lifecycle', component: LifeCycleComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user/:id/:name', component: UserComponent },
];
