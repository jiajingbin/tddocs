import React from 'react';
import styles from './styles.module.css'; // Using a custom className


const SearchBar = (props) => {
    return (<div className={styles.searchBar}>
        <label className={styles.iconLabel}>            
            <svg width="20" height="20" class={styles.searchIcon} viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </label>
        <input type="text"></input>
    </div>);
}


export default function DocsVersionDropdown(props) {
    return (<div className={styles.sidebarTop}>
        <div className={styles.versionDropdownWrapper}>
            <select name="version" className={styles.versionSelect}>
                <option value="v2.x">v2.4</option>
                <option value="v1.6">v1.6</option>
            </select>
        </div>
        <SearchBar />
    </div>);
}