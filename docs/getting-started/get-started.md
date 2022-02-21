---
sidebar_position: 1
---

# 立即开始

## <a class="anchor" id="install"></a>快捷安装

TDengine 包括服务端、客户端和周边生态工具软件，目前 2.0 版服务端仅在 Linux 系统上安装和运行，后续将支持 Windows、Mac OS 等系统。客户端可以在 Windows 或 Linux 上安装和运行。在任何操作系统上的应用都可以使用 RESTful 接口连接服务端程序 taosd，其中 2.4 之后版本默认使用单独运行的独立组件 taosAdapter 提供 http 服务和更多数据写入方式。taosAdapter 需要手动启动。而之前版本 TDengine 使用内置 http 服务。

TDengine 支持 X64/ARM64/MIPS64/Alpha64 硬件平台，后续将支持 ARM32、RISC-V 等 CPU 架构。

### 通过 Docker 容器安装

```
docker run -d -p 6030-6049:6030-6049 -p 6030-6049:6030-6049/udp tdengine/tdengine
```

详细操作方法请参照 [通过 Docker 快速体验 TDengine](https://www.taosdata.com/cn/documentation/getting-started/docker)。

注：暂时不建议生产环境采用 Docker 来部署 TDengine 的客户端或服务端，但在开发环境下或初次尝试时，使用 Docker 方式部署是十分方便的。特别是，利用 Docker，可以方便地在 Mac OS X 和 Windows 环境下尝试 TDengine。

### <a class="anchor" id="package-install"></a>通过安装包安装

TDengine 的安装非常简单，从下载到安装成功仅仅只要几秒钟。为方便使用，标准的服务端安装包包含了客户端程序和示例代码；如果您只需要用到服务端程序和客户端连接的 C/C++ 语言支持，也可以仅下载 lite 版本的安装包。在安装包格式上，我们提供 rpm 和 deb 格式，也为企业客户提供 tar.gz 格式安装包，以方便在特定操作系统上使用。发布版本包括稳定版和 Beta 版，Beta版含有更多新功能。正式上线或测试建议安装稳定版。您可以根据需要选择下载：

<ul id="server-packageList" class="package-list"></ul>

具体的安装方法，请参见 [TDengine 多种安装包的安装和卸载](https://www.taosdata.com/cn/getting-started/install) 以及 [视频教程](https://www.taosdata.com/blog/2020/11/11/1941.html)。

**请点击[这里](https://github.com/taosdata/TDengine/releases)查看 release notes。**

### 使用 apt-get 安装

如果使用 Debian 或 Ubuntu 系统，也可以使用 apt-get 工具从官方仓库安装，设置方法为：

```
wget -qO - http://repos.taosdata.com/tdengine.key | sudo apt-key add -
echo "deb [arch=amd64] http://repos.taosdata.com/tdengine-stable stable main" | sudo tee /etc/apt/sources.list.d/tdengine-stable.list
[ 如果安装 Beta 版需要安装包仓库 ] echo "deb [arch=amd64] http://repos.taosdata.com/tdengine-beta beta main" | sudo tee /etc/apt/sources.list.d/tdengine-beta.list
sudo apt-get update
apt-cache policy tdengine
sudo apt-get install tdengine
```

### 仅安装客户端

如果客户端和服务端运行在不同的电脑上，可以单独安装客户端。下载时请注意，所选择的客户端版本号应该和在上面下载的服务端版本号严格匹配。Linux 和 Windows 安装包如下（其中 lite 版本的安装包仅带有 C/C++ 语言的连接支持，而标准版本的安装包还包含和示例代码）：

<ul id="client-packagelist" class="package-list"></ul>

### 安装 taosTools

taosTools 是多个用于 TDengine 的辅助工具软件集合。目前包含用于数据备份恢复的 taosdump 和用于安装 grafanaplugin 和 dashboard 的脚本 TDinsight.sh。

运行 taosdump 需要安装 TDengine server 或 TDengine client 安装包，推荐使用 deb 或 rpm 格式安装包，方便安装依赖软件。

<ul id="taos-tools" class="package-list"></ul>

### <a class="anchor" id="source-install"></a>通过源码安装

如果您希望对 TDengine 贡献代码或对内部实现感兴趣，请参考我们的 [TDengine github 主页](https://github.com/taosdata/TDengine) 下载源码构建和安装.

**下载其他组件、最新 Beta 版及之前版本的安装包，请点击[这里](https://www.taosdata.com/cn/all-downloads/)**

## <a class="anchor" id="start"></a>轻松启动

安装成功后，用户可使用 `systemctl` 命令来启动 TDengine 的服务进程。

```bash
systemctl start taosd
```

检查服务是否正常工作：

```bash
systemctl status taosd
```

如果 TDengine 服务正常工作，那么您可以通过 TDengine 的命令行程序 `taos` 来访问并体验 TDengine。

### 注意：

- systemctl 命令需要 _root_ 权限来运行，如果您非 _root_ 用户，请在命令前添加 sudo 。
- 为更好的获得产品反馈，改善产品，TDengine 会采集基本的使用信息，但您可以修改系统配置文件 taos.cfg 里的配置参数 telemetryReporting，将其设为 0，就可将其关闭。
- TDengine 采用 FQDN (一般就是 hostname )作为节点的 ID，为保证正常运行，需要给运行 taosd 的服务器配置好 hostname，在客户端应用运行的机器配置好 DNS 服务或 hosts 文件，保证 FQDN 能够解析。
- `systemctl stop taosd` 指令在执行后并不会马上停止 TDengine 服务，而是会等待系统中必要的落盘工作正常完成。在数据量很大的情况下，这可能会消耗较长时间。

TDengine 支持在使用 [`systemd`](https://en.wikipedia.org/wiki/Systemd) 做进程服务管理的 Linux 系统上安装，用 `which systemctl` 命令来检测系统中是否存在 `systemd` 包:

  ```bash
  which systemctl
  ```

  如果系统中不支持 `systemd`，也可以用手动运行 /usr/local/taos/bin/taosd 方式启动 TDengine 服务。

## <a class="anchor" id="console"></a>使用 TDengine 客户端程序

执行 TDengine 客户端程序，您只要在 Linux 终端执行 `taos` 即可。

```bash
taos
```

如果连接服务成功，将会打印出欢迎消息和版本信息。如果失败，则会打印错误消息出来（请参考 [FAQ](https://www.taosdata.com/cn/documentation/faq/) 来解决终端连接服务端失败的问题）。客户端的提示符号如下：

```cmd
taos>
```

在 TDengine 客户端中，用户可以通过 SQL 命令来创建/删除数据库、表等，并进行插入查询操作。在终端中运行的 SQL 语句需要以分号结束来运行。示例：

```mysql
create database demo;
use demo;
create table t (ts timestamp, speed int);
insert into t values ('2019-07-15 00:00:00', 10);
insert into t values ('2019-07-15 01:00:00', 20);
select * from t;
           ts            |    speed    |
========================================
 2019-07-15 00:00:00.000 |          10 |
 2019-07-15 01:00:00.000 |          20 |
Query OK, 2 row(s) in set (0.003128s)
```

除执行 SQL 语句外，系统管理员还可以从 TDengine 客户端进行检查系统运行状态、添加删除用户账号等操作。

### 命令行参数

您可通过配置命令行参数来改变 TDengine 客户端的行为。以下为常用的几个命令行参数：

- -c, --config-dir: 指定配置文件目录，默认为 `/etc/taos`
- -h, --host: 指定服务的 FQDN 地址或 IP 地址，默认为连接本地服务
- -s, --commands: 在不进入终端的情况下运行 TDengine 命令
- -u, --user: 连接 TDengine 服务端的用户名，缺省为 root
- -p, --password: 连接 TDengine 服务端的密码，缺省为 taosdata
- -?, --help: 打印出所有命令行参数

示例：

```bash
taos -h h1.taos.com -s "use db; show tables;"
```

### 运行 SQL 命令脚本

TDengine 终端可以通过 `source` 命令来运行 SQL 命令脚本。

```mysql
taos> source <filename>;
```

### taos shell 小技巧

- 可以使用上下光标键查看历史输入的指令
- 修改用户密码：在 shell 中使用 `alter user` 命令，缺省密码为 taosdata
- ctrl+c 中止正在进行中的查询
- 执行 `RESET QUERY CACHE` 可清除本地缓存的表 schema
- 批量执行 SQL 语句。可以将一系列的 shell 命令（以英文 ; 结尾，每个 SQL 语句为一行）按行存放在文件里，在 shell 里执行命令 `source <file-name>` 自动执行该文件里所有的 SQL 语句
- 输入 q 回车，退出 taos shell

## <a class="anchor" id="demo"></a>TDengine 极速体验

### <a class="anchor" id="taosBenchmark"></a> 使用 taosBenchmark 体验写入速度

启动 TDengine 的服务，在 Linux 终端执行 `taosBenchmark` （曾命名为 taosdemo）：

```bash
taosBenchmark
```

该命令将在数据库 test 下面自动创建一张超级表 meters，该超级表下有 1 万张表，表名为 "d0" 到 "d9999"，每张表有 1 万条记录，每条记录有 (ts, current, voltage, phase) 四个字段，时间戳从 "2017-07-14 10:40:00 000" 到 "2017-07-14 10:40:09 999"，每张表带有标签 location 和 groupId，groupId 被设置为 1 到 10， location 被设置为 "beijing" 或者 "shanghai"。

这条命令很快完成 1 亿条记录的插入。具体时间取决于硬件性能，即使在一台普通的 PC 服务器往往也仅需十几秒。

#### taosBenchmark 详细功能列表

taosBenchmark 命令本身带有很多选项，配置表的数目、记录条数等等，请执行 `taosBenchmark --help` 详细列出。您可以设置不同参数进行体验。

taosBenchmark 详细使用方法请参照 [如何使用taosBenchmark对TDengine进行性能测试](https://www.taosdata.com/2021/10/09/3111.html)。

### <a class="anchor" id="taosshell"></a> 使用 taos shell 体验查询速度

在 TDengine 客户端输入查询命令，体验查询速度。

- 查询超级表下记录总条数：

```mysql
taos> select count(*) from test.meters;
```

- 查询 1 亿条记录的平均值、最大值、最小值等：

```mysql
taos> select avg(current), max(voltage), min(phase) from test.meters;
```

- 查询 location="beijing" 的记录总条数：

```mysql
taos> select count(*) from test.meters where location="beijing";
```

- 查询 groupId=10 的所有记录的平均值、最大值、最小值等：

```mysql
taos> select avg(current), max(voltage), min(phase) from test.meters where groupId=10;
```

- 对表 d10 按 10s 进行平均值、最大值和最小值聚合统计：

```mysql
taos> select avg(current), max(voltage), min(phase) from test.d10 interval(10s);
```

## <a class="anchor" id="platforms"></a>支持平台列表

### TDengine 服务端支持的平台列表

|                | **CentOS 7/8** | **Ubuntu 16/18/20** | **Other Linux** | **统信 UOS** | **银河/中标麒麟** | **凝思 V60/V80** | **华为 EulerOS** |
| -------------- | --------------------- | ------------------------ | --------------- | --------------- | ------------------------- | --------------------- | --------------------- |
| X64            | ●                     | ●                        |                 | ○               | ●                         | ●                     | ●                     |
| 龙芯 MIPS64     |                       |                          | ●               |                 |                           |                       |                       |
| 鲲鹏 ARM64      |                       | ○                        | ○               |                 | ●                         |                       |                       |
| 申威 Alpha64    |                       |                          | ○               | ●               |                           |                       |                       |
| 飞腾 ARM64      |                       | ○ 优麒麟                  |                 |                 |                           |                       |                       |
| 海光 X64        | ●                     | ●                        | ●               | ○               | ●                         | ●                     |                       |
| 瑞芯微 ARM64    |                       |                          | ○               |                 |                           |                       |                       |
| 全志 ARM64      |                       |                          | ○               |                 |                           |                       |                       |
| 炬力 ARM64      |                       |                          | ○               |                 |                           |                       |                       |
| 华为云 ARM64    |                       |                          |                 |                 |                           |                       | ●                     |

注： ● 表示经过官方测试验证， ○ 表示非官方测试验证。

### TDengine 客户端和连接器支持的平台列表

目前 TDengine 的连接器可支持的平台广泛，目前包括：X64/X86/ARM64/ARM32/MIPS/Alpha 等硬件平台，以及 Linux/Win64/Win32 等开发环境。

对照矩阵如下：

| **CPU**     | **X64 64bit** |           |           | **X86 32bit** | **ARM64** | **ARM32** | **MIPS 龙芯** | **Alpha 申威** | **X64 海光** |
| ----------- | --------------- | --------- | --------- | --------------- | --------- | --------- | ------------------- | -------------------- | ------------------ |
| **OS**      | **Linux**       | **Win64** | **Win32** | **Win32**       | **Linux** | **Linux** | **Linux**           | **Linux**            | **Linux**          |
| **C/C++**   | ●               | ●         | ●         | ○               | ●         | ●         | ●                   | ●                    | ●                  |
| **JDBC**    | ●               | ●         | ●         | ○               | ●         | ●         | ●                   | ●                    | ●                  |
| **Python**  | ●               | ●         | ●         | ○               | ●         | ●         | ●                   | --                   | ●                  |
| **Go**      | ●               | ●         | ●         | ○               | ●         | ●         | ○                   | --                   | --                 |
| **NodeJs**  | ●               | ●         | ○         | ○               | ●         | ●         | ○                   | --                   | --                 |
| **C#**      | ●               | ●         | ○         | ○               | ○         | ○         | ○                   | --                   | --                 |
| **RESTful** | ●               | ●         | ●         | ●               | ●         | ●         | ●                   | ●                    | ●                  |

注：● 表示官方测试验证通过，○ 表示非官方测试验证通过，-- 表示未经验证。

请跳转到 [连接器](https://www.taosdata.com/cn/documentation/connector) 查看更详细的信息。

<script src="/wp-includes/js/quick-start.js?v=1"></script>
