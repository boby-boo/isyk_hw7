import React from 'react';
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


  render() {
    console.log(this.state)
    return (
      <div className={style.app}>
        <Header list={this.state.list}/>
        <SubmitForm addListItem={this.addListItem}/>
        <TodoList 
          list={this.state.list} 
          removeItem={this.removeItem} 
        />
        <ComponentA />
      </div>
    )
  }
};

export default App;
