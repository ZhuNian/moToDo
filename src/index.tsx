import * as React from "react";
import * as ReactDOM from "react-dom";
import TodoList from './todo'
import {list} from './store'

let todoList = <TodoList list={list} />

ReactDOM.render(
    todoList,
    document.getElementById("content")
);