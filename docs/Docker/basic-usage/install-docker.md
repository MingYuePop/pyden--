---
sidebar_position: 1
title: 安装 Docker
---

# 安装 Docker

Docker 是一个开源的容器化平台，让开发者能够打包应用及其依赖项到一个可移植的容器中。

## 系统要求

在安装 Docker 之前，请确保你的系统满足以下要求：

- **操作系统**：Windows 10/11, macOS, 或 Linux
- **内存**：至少 4GB RAM
- **存储**：至少 4GB 可用空间

## 安装步骤

### Windows

1. 下载 Docker Desktop for Windows
2. 运行安装程序
3. 重启计算机
4. 启动 Docker Desktop

### macOS

1. 下载 Docker Desktop for Mac
2. 拖拽到 Applications 文件夹
3. 启动 Docker Desktop

### Linux (Ubuntu/Debian)

```bash
# 更新包索引
sudo apt-get update

# 安装必要的包
sudo apt-get install ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 设置仓库
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

## 验证安装

安装完成后，运行以下命令验证 Docker 是否正确安装：

```bash
docker --version
docker run hello-world
```

如果看到 "Hello from Docker!" 消息，说明安装成功！

## 下一步

安装完成后，你可以继续学习 [Docker 基本命令](../deploy-your-site.md)。