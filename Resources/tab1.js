/*global Ti:true Titanium:true exports:true */

//
// create base UI tab and root window
//
var tab1Window = Titanium.UI.createWindow({
    title:'WIN 1 TITLE',
    backgroundColor:'#fff'
});

var data = [
  {title:'foo'},
  {title:'Window Properties'},
  {title:'Window Layout'},
  {title:'Window'},
  {title:'Views'},
  {title:'Custom Events'},
  {title:'Window Events'},
  {title:'Vertical Layout'},
  {title:'Horizontal Layout'}
];

// Create the table view
var tableview = Ti.UI.createTableView({
    backgroundColor: '#fff',
    data:data
});

tab1Window.add(tableview);

var nextWin = Titanium.UI.createWindow({
    title:'NEXT WIN TITLE',
    backgroundColor:'#fff'
});

var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:tab1Window
});

tableview.addEventListener('click',function(e)
{
    // but opening the window this way, you get the nav group
    // drilldown provided by the frame work
    tab1.open(nextWin);
});

exports.tab = tab1;
