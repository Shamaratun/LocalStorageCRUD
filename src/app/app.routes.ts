import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';

export const routes: Routes = [


  { path: 'create', component: CreateComponent },
   { path: 'list', component: ListComponent },
  // // { path: 'content', component: ContentComponent },
   { path: '**', redirectTo: '' },
];
