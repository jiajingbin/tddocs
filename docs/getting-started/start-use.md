---
sidebar_position: 3
sidebar_label: 命令行程序 taos
---

# 使用 TDengine

## 进入命令行

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

## 命令行参数

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

## 运行 SQL 命令脚本

TDengine 终端可以通过 `source` 命令来运行 SQL 命令脚本。

```mysql
taos> source <filename>;
```

## taos shell 小技巧

- 可以使用上下光标键查看历史输入的指令
- 修改用户密码：在 shell 中使用 `alter user` 命令，缺省密码为 taosdata
- ctrl+c 中止正在进行中的查询
- 执行 `RESET QUERY CACHE` 可清除本地缓存的表 schema
- 批量执行 SQL 语句。可以将一系列的 shell 命令（以英文 ; 结尾，每个 SQL 语句为一行）按行存放在文件里，在 shell 里执行命令 `source <file-name>` 自动执行该文件里所有的 SQL 语句
- 输入 q 回车，退出 taos shell




请跳转到 [连接器](https://www.taosdata.com/cn/documentation/connector) 查看更详细的信息。

<script src="/wp-includes/js/quick-start.js?v=1"></script>
