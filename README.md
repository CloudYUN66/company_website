This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


安装：

```bash
npm install
```

运行：

```bash
npm run dev
```

部署：

```bash
npm run build
npm run start
```

第一步写出自己的需求，然后点击提交，点击保存所有（SUBMIT ALL），如果有些命令需要执行，点击RUN，即可运行。

当出现报错，或者页面显示不正常的时候，可以复制当前的报错信息，复制到右侧COMPOSER的输入框中，然后输入FIX，即可修复。

遇到满意的效果界面，一定要点击左上方git按钮（树枝按钮），点击自动生成描述信息，点击提交并推送。

运行前先在新建一个终端运行命令，运行命令为：

```bash
$env:Path += ";C:\Program Files\nodejs"
```
检测nodejs是否安装成功，运行命令为：

```bash
node -v
```

## git 分支管理使用


遇到多次无法解决的问题，可以回滚到上一次的提交，运行命令为

```bash
git checkout -b 分支名 # 创建分支并切换到该分支
git checkout 分支名 # 切换分支

```
暂存区有东西的时候一定要先暂存（commit ），再切换分支，否则会丢失暂存区的内容。
主分支是main，测试分支是test-branch。
测试分支完成部分修改后，合并到主分支，运行命令为：

```bash
git checkout main # 切换到主分支
git merge 分支名 # 合并分支
```
### 合并分支并解决冲突




lkjnkjnoikjn