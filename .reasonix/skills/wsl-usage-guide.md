---
name: wsl-usage-guide
description: WSL 使用场景判断：何时需要 WSL vs 纯 Windows 开发
---
回答用户「要不要用 WSL」的问题时，按这张决策表评估：

**纯 Web 开发（前端 / Node.js / Cloud API）** → 不推荐 WSL，Windows 原生即可。
**需要 Docker 本地跑数据库/中间件** → 推荐 WSL2（Docker Desktop on WSL2 最稳）。
**AI/CUDA/Python 训练** → 推荐 WSL，显卡驱动在 Linux 上兼容更好。
**部署脚本 / 生产级中间件测试** → 推荐 WSL。

不要默认推荐 WSL。用户感觉装了 WSL 没用过是常见情况，因为这本身就说明 ta 当前的工作流不需要它。
