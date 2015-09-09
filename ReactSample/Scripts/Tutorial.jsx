
  // Get context with jQuery - using jQuery's .get() method.
var ctx = $("#myChart").get(0).getContext("2d");
var myPieChart  = null;

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

// This will get the first returned node in the jQuery collection.
var data = [
    {
        value: this.state.data.filter(function(emp){return emp.Department==1}).length,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Department 1"
    },
    {
        value: this.state.data.filter(function(emp){return emp.Department==2}).length,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Department 2"
    },
    {
        value: this.state.data.filter(function(emp){return emp.Department==3}).length,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Department 3"
    }
];
 myPieChart = new Chart(ctx).Pie(data, {
    animateScale: true
});
   return (  <Griddle results={this.state.data} columns={["Id", "Name", "Department"]} showFilter={true}
 showSettings={true} resultsPerPage={200}/>);
}
});
React.render(
<CommentBox url="/Home/Comments"/>,
  document.getElementById('content')
);
$("#myChart").click(function(evt){
    var activePoints =  myPieChart.getSegmentsAtEvent(evt);
    // => activePoints is an array of segments on the canvas that are at the same position as the click event.
});