import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '高性能',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        通过创新的存储引擎设计，无论是数据写入还是查询，TDengine 的性能比通用数据库快10倍以上，也远超其他时序数据库，而且存储空间也大为节省。
      </>
    ),
  },
  {
    title: '分布式',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        通过原生分布式的设计，TDengine 提供了水平扩展的能力，只需要增加节点就能获得更强的数据处理能力，同时通过多副本机制保证了系统的高可用。
      </>
    ),
  },
  {
    title: '支持 SQL',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        TDengine 采用 SQL 作为数据查询语言，减少学习和迁移成本，同时提供 SQL扩展来处理时序数据特有的分析，而且支持方便灵活的 schemaless 数据写入
      </>
    ),
  }
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
