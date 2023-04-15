import React from 'react';
import styles from './SubmitForm.module.scss';
import Button from '../Button/Button';
import { v4 } from 'uuid' 

import { iconTypes } from '../constants/icons';

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
        // const value = prompt('Enter task');
        if(!this.state.value) return;

        // if(!value) return;
        // this.setState({
        //     value: value
        // })
        // const item = {
        //     value,
        //     id: v4()
        // }
        const item = {
            ...this.state,
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
                <input value={this.state.value} onChange={this.handleChange} />
                <div className={styles.inner}>
                        Add new task
                    <Button iconType={iconTypes.plus} color='teal' size='40' /> 
                </div>
            </form>
        )
    }
}

export default SubmitForm;
