import React from 'react';
import styles from './styles.module.css'; // Using a custom className

export default function DocsVersionDropdown(props) {
    return (<div className={styles.sidebarTop}>
        <div className={styles.versionDropdownWrapper}>
            <select name="version" className={styles.versionSelect}>
                <option value="v2.x">v2.4</option>
                <option value="v1.6">v1.6</option>
            </select>
        </div></div>);
}