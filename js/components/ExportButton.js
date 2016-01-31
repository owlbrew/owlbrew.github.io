var ExportButton = React.createClass({
    render: function () {
        var downloadAsTextFile = function (text) {
            var data = new Blob([text], {type: 'text/plain'});
            var url = (window.webkitURL || window.URL).createObjectURL(data);
            //TODO check if element already exists and replace it
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = 'mydeck.txt';
            a.click();
        };
        var handleButtonClicked = function () {
            downloadAsTextFile("hello i am text");
        };
        return (
            <button onClick={handleButtonClicked}>Click me</button>
        )
    }
});