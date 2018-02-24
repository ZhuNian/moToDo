import * as React from "react";
import * as ReactDOM from "react-dom";

export default class TodoList extends React.Component<
  {list: List},
  {}
> {
  render () {
    const list = this.props.list || []
    return <div className='todo-list'>
      {list.map(l => <div>{l.name}</div>)}
    </div>
  }
}