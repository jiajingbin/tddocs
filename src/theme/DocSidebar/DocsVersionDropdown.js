import React from 'react';
import styles from './styles.module.css'; // Using a custom className
import clsx from 'clsx';

export default function DocsVersionDropdown(props) {
    return (<div className={styles.versionDropdownWrapper}>
        <select name="version" className={styles.versionSelect}>
            <option value="v2.x">v2.4</option>
            <option value="v1.6">v1.6</option>
        </select>
    </div>);
}