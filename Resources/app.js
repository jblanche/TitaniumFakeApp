/*global Ti:true Titanium:true require:true */
Titanium.UI.setBackgroundColor('#000');

var tab1 = require('tab1');
var tab2 = require('tab2');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
tabGroup.addTab(tab1.tab);
tabGroup.addTab(tab2.tab);

// open tab group
tabGroup.open();
