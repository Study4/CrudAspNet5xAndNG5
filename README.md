# CrudAspNet5xAndNG5
ASP.NET MVC 5.X and Angular 5 , Use MPA

ASP.NET MVC 5.X 整合 Angular 5 , 使用 MPA 架構

## 執行
1.使用 VS 2017 run IIS Express
2.執行 ng server --proxy-config proxy.config.json 
3.瀏覽 http://localhost:4200/home/index
4.瀏覽 http://localohst:4200/home/about

index 和 about 由伺服器渲染

## Issue
1. MVC 首頁會使用到 Angular Index.html
2. 目前只時做查詢
3. 未使用 RX 模式
4. 部分尚未優化

## 特別感謝

[Angular User Group Taiwan](https://www.facebook.com/groups/augularjs.tw/permalink/1361040760572957/) Kevin  特別提供相關作法

[Angular 2 in a multi-page application](https://blog.novatec-gmbh.de/angular-2-in-a-multi-page-application/)

[[Angular]與DOTNET MVC CORE 整合](https://blog.kevinyang.net/2017/09/17/mvc-core-with-angular/)

[[Angular] 手動創造出 Lazy Loading 的效果](https://blog.kevinyang.net/2017/11/08/manual-lazy-loading/)
