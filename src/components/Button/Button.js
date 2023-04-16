import React from "react";
import styles from '../Button/Button.module.scss';

import { Icon } from '../Icon/Icon';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {iconType, color, size, text} = this.props;

        return (
            <button className={styles.icon}>
                {text}
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