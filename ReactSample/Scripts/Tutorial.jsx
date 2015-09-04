

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      var start = new Date().getTime();
      console.log(start);
      this.setState({ data: data });
      var stop = new Date().getTime();
      console.log(stop);
    }.bind(this);
    xhr.send();
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
  },
  render:function() {
    var items = [];
    for (var i = 0; i < this.state.data.length; i++) {
	items.push(React.createElement("li", { className:"list-group-item" },
                                    React.createElement("p", null, this.state.data[i].Author),
									React.createElement("p", null, this.state.data[i].Text)
                                ));
    }

    return React.createElement("ul", {className:"list-group"}, items);
}
});




React.render(
  <CommentBox url="/Home/Comments"/>,
  document.getElementById('content')
);
