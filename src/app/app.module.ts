/* 模块 */
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

/* 指令 */
import { HightlightDirective } from './directives/hightlight.directive'; // 属性指令--背景高亮

@NgModule({
  // 组件，指令 的声明
  declarations: [
    AppComponent,
    HomeComponent,
    PcontentComponent,
    HightlightDirective
  ],
  // 导入其他模块，表示该模块依赖其他模块的组件
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  // 服务
  providers: [CommonService],
  // 模块的启动组件，一般app模块才会用到
  bootstrap: [AppComponent]
})
export class AppModule { }
