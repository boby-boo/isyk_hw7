import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <h1 className={styles.heading}>You have {list.length} task</h1>
        )
    }
}

export default Header;
