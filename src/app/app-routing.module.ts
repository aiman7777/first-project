import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'labtask5',
    pathMatch: 'full'
  },
  {
    path: 'test-apps',
    loadChildren: () => import('./test-apps/test-apps.module').then( m => m.TestAppsPageModule)
  },
  {
    path: 'lab4',
    loadChildren: () => import('./lab4/lab4.module').then( m => m.Lab4PageModule)
  },
  {
    path: 'labtask4',
    loadChildren: () => import('./labtask4/labtask4.module').then( m => m.Labtask4PageModule)
  },
  {
    path: 'labtest',
    loadChildren: () => import('./labtest/labtest.module').then( m => m.LabtestPageModule)
  },
  {
    path: 'labtask5',
    loadChildren: () => import('./labtask5/labtask5.module').then( m => m.Labtask5PageModule)
  },
  {
    path: 'labtest',
    loadChildren: () => import('./labtest/labtest.module').then( m => m.LabtestPageModule)
  },
  
  {
    path: 'pubg',
    loadChildren: () => import('./pubg/pubg.module').then( m => m.PubgPageModule)
  },
  {
    path: 'fortnite',
    loadChildren: () => import('./fortnite/fortnite.module').then( m => m.FortnitePageModule)
  },
  {
    path: 'lol',
    loadChildren: () => import('./lol/lol.module').then( m => m.LolPageModule)
  },
  {
    path: 'apex',
    loadChildren: () => import('./apex/apex.module').then( m => m.ApexPageModule)
  },
  {
    path: 'ml',
    loadChildren: () => import('./ml/ml.module').then( m => m.MlPageModule)
  },
  {
    path: 'labtask7',
    loadChildren: () => import('./labtask7/labtask7.module').then( m => m.Labtask7PageModule)
  },
  {
    path: 'labtask8',
    loadChildren: () => import('./labtask8/labtask8.module').then( m => m.Labtask8PageModule)
  },
  {
    path: 'labtask8-p2',
    loadChildren: () => import('./labtask8-p2/labtask8-p2.module').then( m => m.Labtask8P2PageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'view-post',
    loadChildren: () => import('./view-post/view-post.module').then( m => m.ViewPostPageModule)
  },
  {
    path: 'edit-post/:id',
    loadChildren: () => import('./edit-post/edit-post.module').then( m => m.EditPostPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
