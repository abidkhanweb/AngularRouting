// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Routing from angular core
import { RouterModule } from '@angular/router';

// Services
import { UserService } from './pages/service/user.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ServiceComponent } from './pages/service.component';
import { ContactComponent } from './pages/contact.component';
import { UserDetailComponent } from './user-details.component';






@NgModule({
  imports: [
    BrowserModule,

    // Define router module and specify declaration
    RouterModule.forRoot([
      {path:"", redirectTo:'/home', pathMatch:'full'},
      {path:'home', component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'service',component:ServiceComponent},
      {path:'contact',component:ContactComponent},
      {path:'user-detail/:id', component:UserDetailComponent}

    ])
  ],

  declarations: [
    
    // Main Component
    AppComponent,

    // Other Component
    HomeComponent, AboutComponent, ServiceComponent, ContactComponent, UserDetailComponent

  ],
  
  bootstrap: [AppComponent],

  providers:[UserService]

})

export class AppModule {
}
