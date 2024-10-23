import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NopagefoundComponent } from './404/nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    AppComponent,
  
    NopagefoundComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    HttpClientModule,
    PagesModule,
    AuthModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
