var SearchBar = React.createClass({
    render: function () {
        return (
            <div>
                <SearchField searchText={this.props.searchText} onUserInput={this.props.handleInputCallback}/>
            </div>
        )
    }
});