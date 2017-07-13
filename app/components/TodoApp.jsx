var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var ToDoSearch = require('SearchToDo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {
                    id: 1,
                    text: 'Jogging'
                }, {
                    id: 2,
                    text: 'Swimming'
                }, {
                    id: 3,
                    text: 'Homework'
                }, {
                    id: 4,
                    text: 'Play video games'
                }
            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <ToDoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
