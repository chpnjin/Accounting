﻿# 簡介
電子帳簿網頁板(.Net Core + Vue.js)

此專案後端使用.Net Core框架,前端使用Vue.js框架
實現前後端關注點分離的Side Project

第一階段預計將原Windows Form版的功能完全複製到此專案中

<H3>2024-11-28</H3>

後端API 改為 NET8 框架
前端網站 改為獨立執行 Vue 3.0 框架網站

兩者個別使用Dockerfile單獨打包，再用docker-compose整合打包後同時執行
此為因應未來微服務架構趨勢而改動

<H3>2024-12-20</H3>

[後端]
1.完成API啟動時自動偵測與新增系統管理員帳號流程
2.密碼採用高度加密演算法，共使用5個欄位儲存密碼
3.追加HTTPS連線

[前端]
完成登入頁設計與假登入機制
基礎功能路由設計完成

下一步要把前端與後端登入機制整合

<H3>2024-12-23</H3>

[後端]
1.API啟動時自動偵測與新增系統管理員帳號流程改良-追加新增系統管理員中文全名
2.登入驗證API完成：輸入帳號或E-mail與密碼，驗證完成回傳JWT與使用者全名

[前端]
1.登入頁核心功能完成，輸入帳密驗證成功自動導向主功能頁面
2.主功能頁面顯示使用者全名
3.登出時清除JWT與導回登入頁面

<H3>2024-12-31</H3>

[後端]
1.系統管理員帳號登入時效取消限制
2.科目編輯API改為可INSERT與UPDATE

[前端]
設定－新增與更新科目與子科目功能完成

<H3>2025-01-09</H3>

完成新增與編輯傳票功能
