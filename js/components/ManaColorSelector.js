var ManaColorSelector = React.createClass({
    handleChange: function () {
        var manaParams = {
            white: this.refs.whiteCheckbox.getDOMNode().checked,
            blue: this.refs.blueCheckbox.getDOMNode().checked,
            black: this.refs.blackCheckbox.getDOMNode().checked,
            red: this.refs.redCheckbox.getDOMNode().checked,
            green: this.refs.greenCheckbox.getDOMNode().checked
        };
        this.props.manaParamsInputCallback(manaParams);
    },
    render: function () {
        return (
            <div>
                <input type="checkbox" ref="whiteCheckbox" checked={this.props.manaParams.white}
                       onChange={this.handleChange}>W</input>
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