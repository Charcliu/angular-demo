import { Component } from '@angular/core';

// 为该组件指定 Angular 所需的元数据
@Component({
  selector: 'app-root',  // 组件选择器
  templateUrl: './app.component.html', // 组件模板位置
  styleUrls: ['./app.component.css'] //组件样式表位置
})
export class AppComponent {
  title = 'angular-demo';
}
