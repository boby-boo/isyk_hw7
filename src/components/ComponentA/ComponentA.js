import React from 'react';
import ComponentB from '../ComponentB/ComponentB';
import styles from './ComponentA.module.scss';

import { connect } from 'react-redux';
import { decrementAction, incrementAction } from '../../redux/action';

class ComponentA extends React.Component {

    handleIncrement() {
        this.props.dispatch(incrementAction)
    }

    handleDecrement() {
        this.props.dispatch(decrementAction)
    }

    render() {
        return(
            <div>
                <h1>Count: {this.props.counter}</h1>
                <div className={styles.buttons}>
                    <ComponentB handleClick={this.handleIncrement.bind(this)}>
                        Increment
                    </ComponentB>
                    <ComponentB handleClick={this.handleDecrement.bind(this)}>
                        Decrement
                    </ComponentB>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps) (ComponentA);
