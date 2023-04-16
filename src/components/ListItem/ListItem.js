import React from "react";
import Button from "../Button/Button";
import { iconTypes } from '../iconTypes/iconTypes';

import styles from './ListItem.module.scss';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDone: false
        };

        this.completedItem = this.completedItem.bind(this);
    }
    completedItem() {
        this.setState(prevState => ({
            isDone: !prevState.isDone
        }))
    }
    render() {
        const {id, value, removeItem} = this.props;
        return (
            <li className={`${this.state.isDone ? styles.completed : null} ${styles.item}`}>
            <p>
                {value}
            </p>
            <div className={styles.buttons}>
                <Button 
                    iconType={iconTypes.cross} 
                    color='#e31212' 
                    size='15' 
                    onClick={removeItem.bind(this, id)} 
                />
                <Button 
                    iconType={this.state.isDone ? iconTypes.check : iconTypes.uncheck} 
                    color='#2aff1e' 
                    size='20' 
                    onClick={this.completedItem} 
                />
            </div>
            </li>    
        )
    }
}

export default ListItem;
