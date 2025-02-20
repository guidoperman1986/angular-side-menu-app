import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './modules/admin/layouts/admin-layout/admin-layout.component'
      ).then((c) => c.AdminLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./modules/admin/pages/summary/summary.component').then(
            (c) => c.SummaryComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./modules/admin/pages/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
