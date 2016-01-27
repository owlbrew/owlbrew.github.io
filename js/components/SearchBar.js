var SearchBar = React.createClass({
    render: function () {
        return (
            <div className="searchBar" >
                <SearchField searchText={this.props.searchText} onUserInput={this.props.handleInputCallback}/>
            </div>
        )
    }
});