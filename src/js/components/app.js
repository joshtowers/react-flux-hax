/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router-component');

var Template = require('./app-template.js');
var DesignList = require('./design-list.js');
var LayoutList = require('./layout-list.js');
var PaletteList = require('./palette-list.js');

var Locations = Router.Locations;
var Location = Router.Location;


var APP =
  React.createClass({
    render:function(){
      return (
        <Template>
          <Locations>
            <Location path="/" handler={DesignList} />
            <Location path="/layouts" handler={LayoutList} />
            <Location path="/palettes" handler={PaletteList} />
          </Locations>
        </Template>
        )
    }
  });
module.exports = APP;
