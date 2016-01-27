var SearchField = React.createClass({
    handleChange: function () {
        this.props.onUserInput(
            this.refs.searchTextInput.getDOMNode().value
        );
    },
    render: function () {
        return (
            <form>
                <input type="text" ref="searchTextInput" onChange={this.handleChange}
                       value={this.props.searchText}/>
            </form>
        )
    }
});