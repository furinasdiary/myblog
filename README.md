# Furina Blog

> 一个以芙宁娜主题为核心的个人博客与内容展示站点。

[在线访问](https://furinasdiary.github.io/) · [原始项目 Firefly](https://github.com/CuteLeaf/Firefly)

## 关于本项目

本项目基于 **Firefly-master（Firefly）博客项目** 进行个人化改装。

- 博客的底层框架、核心架构与原始功能均沿用原 Firefly 博客；
- 本仓库在原博客框架之上，进行了芙宁娜主题、界面、背景、特效、桌宠、音乐、相册、评论区与移动端体验等方面的定制；
- 因此，本项目不是从零开始重写的博客框架，而是基于原 Firefly 项目进行的二次开发与内容创作。

Firefly 本身构建于 Astro 与 Fuwari 生态之上。感谢 Firefly 原作者及贡献者提供优秀的开源基础。

## 功能概览

- Markdown / MDX 文章与代码高亮
- 文章、标签、分类、归档、动态与搜索
- 本地音乐播放器、相册与加密内容
- Giscus 评论与留言板
- GitHub Pages 自动构建与部署
- 芙宁娜主题的壁纸、气泡、鼠标与桌宠互动效果
- 深色 / 浅色模式及桌面、平板、移动端适配

## 技术栈

- [Astro](https://astro.build/)
- [Svelte](https://svelte.dev/)
- TypeScript
- Tailwind CSS
- pnpm
- GitHub Actions + GitHub Pages

## 本地运行

### 环境要求

- Node.js 22 或更高版本（与部署工作流保持一致）
- pnpm 9.14.4 或更高版本

### 安装与启动

```bash
git clone https://github.com/furinasdiary/furinasdiary.github.io.git
cd furinasdiary.github.io
pnpm install
pnpm dev
```

启动后，在浏览器打开终端显示的本地地址，通常是：

```text
http://localhost:4321/
```

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 启动本地开发预览，修改后会自动刷新 |
| `pnpm check` | 检查 Astro、Svelte 与 TypeScript 问题 |
| `pnpm build` | 构建生产版本到 `dist/` |
| `pnpm preview` | 预览已经构建好的网站 |
| `pnpm new-post <文件名>` | 创建一篇新文章 |
| `pnpm new-d <内容>` | 创建一条动态 |

## 常用配置位置

大多数站点内容都集中在 [`src/config/`](src/config/)：

| 文件 | 用途 |
| --- | --- |
| [`siteConfig.ts`](src/config/siteConfig.ts) | 站点标题、域名、主题色与页面基础配置 |
| [`profileConfig.ts`](src/config/profileConfig.ts) | 头像、昵称、社交链接与个人资料 |
| [`backgroundWallpaper.ts`](src/config/backgroundWallpaper.ts) | 背景图片、横幅和壁纸模式 |
| [`effectsConfig.ts`](src/config/effectsConfig.ts) | 水蓝气泡等视觉特效默认设置 |
| [`musicConfig.ts`](src/config/musicConfig.ts) | 音乐播放器与歌单配置 |
| [`galleryConfig.ts`](src/config/galleryConfig.ts) | 相册与图片展示配置 |
| [`commentConfig.ts`](src/config/commentConfig.ts) | 评论系统配置 |
| [`pioConfig.ts`](src/config/pioConfig.ts) | 桌宠模型与交互配置 |

文章位于 [`src/content/posts/`](src/content/posts/)，动态位于 [`src/content/dynamic/`](src/content/dynamic/)。

## 部署到 GitHub Pages

仓库已经包含 GitHub Pages 工作流。向 `main` 分支推送提交后，GitHub Actions 会自动安装依赖、构建网站并发布。

```bash
git add -A
git commit -m "feat: update site"
git push
```

部署完成后，访问：<https://furinasdiary.github.io/>

## 致谢与许可证

本项目基于 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly) 二次开发，保留原项目使用的 MIT License 与相关版权声明。

站点内使用的图片、音乐、角色形象及其他素材，其版权归各自权利人所有；请仅在符合原素材授权范围的前提下使用或再分发。

本仓库遵循 [MIT License](LICENSE)。
