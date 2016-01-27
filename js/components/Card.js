var Card = React.createClass({
    render: function () {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
                <img src={this.props.data.editions[0].image_url}/>
            </div>
        )
    }
});