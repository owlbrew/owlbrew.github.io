var ManaColorSelector = React.createClass({
    handleChange: function () {
        console.log('oi');
        var manaParams = {
            white: this.refs.whiteCheckbox.getDOMNode().value,
            blue: this.refs.blueCheckbox.getDOMNode().value,
            black: this.refs.blackCheckbox.getDOMNode().value,
            red: this.refs.redCheckbox.getDOMNode().value,
            green: this.refs.greenCheckbox.getDOMNode().value
        };
        this.props.manaParamsInputCallback(manaParams);
    },
    render: function () {
        console.log('oi');
        return (
            <div>
                <input type="checkbox" ref="whiteCheckbox" checked={this.props.manaParams.white}
                       onClick={this.handleChange}>W</input>
                <input type="checkbox" ref="blueCheckbox" checked={this.props.manaParams.blue}
                       onChange={this.handleChange}>U</input>
                <input type="checkbox" ref="blackCheckbox" checked={this.props.manaParams.black}
                       onChange={this.handleChange}>B</input>
                <input type="checkbox" ref="redCheckbox" checked={this.props.manaParams.red}
                       onChange={this.handleChange}>R</input>
                <input type="checkbox" ref="greenCheckbox" checked={this.props.manaParams.green}
                       onChange={this.handleChange}>G</input>
            </div>
        )
    }
});