import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesPageComponent } from './pages/courses/courses-page.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { requestCacheInterceptor } from './interceptors/request-cache-interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoursesPageComponent],
  providers: [provideHttpClient(withInterceptors([requestCacheInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
