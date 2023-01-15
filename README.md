# package.json

```
// 将所有依赖项安装到当前项目目录，重新生成 package-lock.json 或 pnpm-lock.yaml
"bootstrap": "pnpm i --shamefully-hoist --no-frozen-lockfile",

// 预览当前项目
"preview": "nuxi preview ."

// 预览当前已打包的项目
"server": "node .output/server/index.mjs",

// 规范代码格式为统一风格
"lint": "prettier --write .",
```