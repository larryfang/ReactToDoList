var React = require("react");

var SearchToDo = React.createClass({

    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);

    },

    render: function () {
        return(
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search ToDos" onChange={this.handleSearch}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show Completed ToDos
                    </label>
                </div>
            </div>
        )
    }
});


module.exports = SearchToDo;