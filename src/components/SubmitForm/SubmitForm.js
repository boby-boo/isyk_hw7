import React from 'react';
import styles from './SubmitForm.module.scss';
import Button from '../Button/Button';
import { v4 } from 'uuid';

import { iconTypes } from '../iconTypes/iconTypes';

class SubmitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const value = prompt('Enter task');

        if (!value) return;
        this.setState({
            value: value
        })
        const item = {
            value,
            id: v4()
        }

        this.props.addListItem(item);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.inner}>
                    <Button text='Add new task' iconType={iconTypes.plus} color='teal' size='40' /> 
                </div>
            </form>
        )
    }
}

export default SubmitForm;
