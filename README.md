# 百万头牛

一个内容优先的独立投资网站，使用 Astro、Pages CMS、GitHub 与 Cloudflare Pages。

## 已实现

- 个人主页式首页
- “全部 + 专题”筛选
- 文章置顶和按日期排序
- 图片封面与自动文字封面
- 专题聚合页
- 长文章阅读页和文章目录
- 手机、平板、电脑响应式布局
- 关于页面、免责声明、SEO 与站点地图
- Pages CMS 内容后台配置

## 常用命令

```sh
pnpm install
pnpm dev
pnpm build
```

## 内容位置

- 文章：`src/content/posts/`
- 图片：`public/images/`
- 名称与简介：`src/site.ts`
- Pages CMS 后台配置：`.pages.yml`

正式上线后，文章通过 Pages CMS 后台编辑，不需要操作代码。
