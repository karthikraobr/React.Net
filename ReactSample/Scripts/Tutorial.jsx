

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
  render: function() {
    return (
	<ul className="list-group">
            {this.state.data.map(function(x) {
                return <li className="list-group-item">
                <p>{x.Author}</p>
                <p>{x.Text}</p>
            </li>
            })}
    </ul>
    );
  }
});


React.render(
  <CommentBox url="/home/comments"/>,
  document.getElementById('content')
);
