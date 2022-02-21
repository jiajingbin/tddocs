import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '10倍以上的性能提升',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        定义了创新的数据存储结构，单核每秒就能处理至少2万次请求，插入数百万个数据点，读出一千万以上数据点，比现有通用数据库快了十倍以上。
      </>
    ),
  },
  {
    title: '硬件或云服务成本降至1/5',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        由于超强性能，计算资源不到通用大数据方案的1/5；通过列式存储和先进的压缩算法，存储空间不到通用数据库的1/10。
      </>
    ),
  },
  {
    title: '全栈时序数据处理引擎',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        将数据库、消息队列、缓存、流式计算等功能融合一起，应用无需再集成Kafka/Redis/HBase/Spark等软件，大幅降低应用开发和维护成本。
      </>
    ),
  },
  {
    title: '强大的分析功能',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       无论是十年前还是一秒前的数据，指定时间范围即可查询。数据可在时间轴上或多个设备上进行聚合。即席查询可通过Shell/Python/R/Matlab随时进行。
      </>
    ),
  },
  {
    title: '与第三方工具无缝连接',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       不用一行代码，即可与Telegraf, Grafana, EMQ X, Prometheus, Matlab, R集成。后续还将支持MQTT, OPC, Hadoop，Spark等, BI工具也将无缝连接。
      </>
    ),
  },
  {
    title: '零运维成本、零学习成本',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       安装、集群一秒搞定，无需分库分表，实时备份。标准SQL，支持JDBC,RESTful，支持Python/Java/C/C++/Go/Node.JS, 与MySQL相似，零学习成本。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
