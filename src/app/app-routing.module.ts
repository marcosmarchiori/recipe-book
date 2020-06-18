import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesModule } from './recipes/recipes.module';



const appRoutes : Routes = [
    { path: '', redirectTo : '/recipes', pathMatch : 'full'},
    { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule) },
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(s => s.ShoppingListModule) },
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule) }
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}