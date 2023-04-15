import React from 'react';
import Button from '../Button/Button';
import { iconTypes } from '../iconTypes/iconTypes';

import styles from './TodoList.module.scss';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className={styles.list}>
                {this.props.list.map(item => {
                    const { id, value, isDone} = item;
                    return (
                        <li key={id} className={`${isDone ? this.props.styleComponent : null} ${styles.item}`}>
                            <span>
                                {value}
                            </span>
                            <div className={styles.buttons}>
                                <Button 
                                    iconType={iconTypes.cross} 
                                    color='#e31212' 
                                    size='15' 
                                    onClick={this.props.removeItem.bind(this, id)} 
                                />
                                <Button 
                                    iconType={isDone ? iconTypes.check : iconTypes.uncheck} 
                                    color='#2aff1e' 
                                    size='20' 
                                    onClick={this.props.completedItem.bind(this, id)} 
                                />
                            </div>
                        </li>                        
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;
