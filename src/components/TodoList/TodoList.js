import React from 'react';
import styles from './TodoList.module.scss';

import ListItem from '../ListItem/ListItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={styles.list}>
                {this.props.list.map(item => {
                    const {id, value} = item;
                    return (
                        <ListItem 
                            key={id}
                            id={id} 
                            value={value} 
                            completedItem={this.props.completedItem} 
                            removeItem={this.props.removeItem}
                        />                     
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;
