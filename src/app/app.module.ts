import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; // 引入http和 jsonp（可处理跨域）

/* 组件 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PcontentComponent } from './components/pcontent/pcontent.component';

/* 服务 */
import { CommonService } from './services/common.service'; // 接口服务
import { HightlightDirective } from './directives/hightlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PcontentComponent,
    HightlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
