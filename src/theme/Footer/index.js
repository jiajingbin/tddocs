import React from "react";
import styles from "./styles.module.css";
import siteLogo from "../../../static/img/site-logo.png";

const TopLeft = () => (
  <div className={styles.left}>
    <figure className={styles.logo}>
      <img src={siteLogo} className={styles.logoImg} width="100" />
    </figure>
    <div className="tdengine">
      <p>
        TDengine 是一款高性能、分布式、支持 SQL
        的时序数据库，其核心代码包括集群功能全部开源，同时TDengine
        还带有内建的缓存、流式计算、数据订阅等系统功能，能大幅减少研发和运维的复杂度，可广泛应用于物联网、车联网、工业互联网、IT运维、金融等领域。
      </p>
    </div>
  </div>
);

const TopRight = () => <div className={styles.right}>{"联系销售"}</div>;

const BottomLeft = () => (
  <div className={styles.bottomLeft}>
    <p style={{margin: 0}}>
      © <span id="copy-year">2022</span> 涛思数据 | 京公网安备 11010502047618号
      | 京ICP备17069529号-1
    </p>
  </div>
);

const BottomRight = () => <div className={styles.bottomRight}></div>;

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.inside}>
          <div className={styles.top}>
            <TopLeft />
            <TopRight />
          </div>
          <div className={styles.bottom}>
            <BottomLeft />
            <BottomRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
