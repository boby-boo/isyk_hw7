import React from 'react';

class ComponentB extends React.Component {

    render() {
        return(
            <button onClick={this.props.handleClick}>
                {this.props.children}
            </button>
        )
    }
}

export default ComponentB;