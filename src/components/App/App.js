import React from 'react';
import styles from '../../global.scss';
import style from './App.module.scss';
import SubmitForm from '../SubmitForm/SubmitForm';
import TodoList from '../TodoList/TodoList';
import Header from '../Header/Header';
import ComponentA from '../ComponentA/ComponentA';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.addListItem = this.addListItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.completedItem = this.completedItem.bind(this);
  }

  addListItem(item) {
    const updatedList = [...this.state.list, item];
    this.setState({
      list: updatedList
    })
  }

  removeItem(id) {
    const updatedList = this.state.list.filter(item => item.id !== id);

    this.setState({
      list: updatedList
    })
  }

  completedItem(id) {
    const updatedList = this.state.list.map(item => {
      if (item.id === id) {
        return {
          ...item, isDone: !item.isDone
        };
      }
      return item
    }
    );
    console.log(updatedList)
    this.setState({
      list: updatedList
    })

  }

  render() {
    return (
      <div className={style.app}>
        <Header list={this.state.list}/>
        <SubmitForm addListItem={this.addListItem}/>
        <TodoList 
          list={this.state.list} 
          styleComponent={style.completed}
          removeItem={this.removeItem} 
          completedItem={this.completedItem} 
        />
        <ComponentA />
      </div>
    )
  }
};

export default App;
