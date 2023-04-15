import React from "react";
import styles from '../Button/Button.module.scss';

import { Icon } from '../Icon';

class Button extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {iconType, color, size} = this.props;

        return (
            <button className={styles.icon}>
                {this.props.children}
                <Icon 
                    type={iconType} 
                    color={color} 
                    size={size} 
                    onClick={this.props.onClick}
                />
            </button>
        )
    }
}

export default Button;