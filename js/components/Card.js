var Card = React.createClass({
    render: function () {
        return (
            <div className="card">
                <img src={this.props.data.editions[0].image_url}/>
            </div>
        )
    }
});