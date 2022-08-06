import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './myapp/auth.service';
import { AuthGuard } from './myapp/auth.guard';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'},
  {path: 'category' , component: CategoryComponent  },   
  {path: 'login' , component: LoginComponent},
  {path: 'product' , component: ProductComponent },
  {path: 'register' , component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
