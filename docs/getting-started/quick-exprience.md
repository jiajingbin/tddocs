---
sidebar_position: 4
sidebar_label: 极速体验
---

# 极速体验

## 使用 taosBenchmark 体验写入速度

启动 TDengine 的服务，在 Linux 终端执行 `taosBenchmark` （曾命名为 taosdemo）：

```bash
taosBenchmark
```

该命令将在数据库 test 下面自动创建一张超级表 meters，该超级表下有 1 万张表，表名为 "d0" 到 "d9999"，每张表有 1 万条记录，每条记录有 (ts, current, voltage, phase) 四个字段，时间戳从 "2017-07-14 10:40:00 000" 到 "2017-07-14 10:40:09 999"，每张表带有标签 location 和 groupId，groupId 被设置为 1 到 10， location 被设置为 "beijing" 或者 "shanghai"。

这条命令很快完成 1 亿条记录的插入。具体时间取决于硬件性能，即使在一台普通的 PC 服务器往往也仅需十几秒。

### taosBenchmark 详细功能列表

taosBenchmark 命令本身带有很多选项，配置表的数目、记录条数等等，请执行 `taosBenchmark --help` 详细列出。您可以设置不同参数进行体验。

taosBenchmark 详细使用方法请参照 [如何使用 taosBenchmark 对 TDengine 进行性能测试](https://www.taosdata.com/2021/10/09/3111.html)。

## 使用 taos shell 体验查询速度

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
