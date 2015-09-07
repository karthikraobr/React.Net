

var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.props.url, true);
    xhr.onload = function() {
      var data = JSON.parse(xhr.responseText);
      var start = new Date().getTime();
      console.log(start);
	  fakeData = data;
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

    return (  <Griddle results={this.state.data} columns={["Id", "Author", "Text"]} showFilter={true}
 showSettings={true} resultsPerPage={1000}/>);
}
});
React.render(
<CommentBox url="/Home/Comments"/>,
  document.getElementById('content')
);
