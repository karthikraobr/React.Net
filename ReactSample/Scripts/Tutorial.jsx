

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
      $.get(this.props.url, function (result) {
          var data = JSON.parse(result);
          this.setState({ data: data });
      }.bind(this));
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
        items.push(React.createElement("div", { className:"comment" ,key:this.state.data[i].Id},
                                    React.createElement("p", { className: "comment-header" }, this.state.data[i].Author),
									React.createElement("p", { className: "comment-header" }, this.state.data[i].Text)
                                ));
    }

    return React.createElement("ul", {className:"list-group"}, items);
}
});




React.render(
  <CommentBox url="/Home/Comments"/>,
  document.getElementById('content')
);
