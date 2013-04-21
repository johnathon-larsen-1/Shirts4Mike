/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)": [
            ["style", "height", '354px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '2px'],
            ["style", "width", '1011px']
         ],
         "${_content} > div:nth-child(2)": [
            ["style", "height", '378px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)": [
            ["transform", "translateX", '-967px'],
            ["transform", "translateY", '0px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '-101px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '-101px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid59", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateY", '0px', { fromValue: '-101px'}], position: 0, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid41", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateX", '-60px', { fromValue: '-967px'}], position: 0, duration: 2000 },
            { id: "eid47", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2500 },
            { id: "eid60", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateY", '0px', { fromValue: '-101px'}], position: 0, duration: 1000 },
            { id: "eid52", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid51", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid35", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "scaleX", '1', { fromValue: '0.3619'}], position: 0, duration: 1000 },
            { id: "eid50", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "height", '354px', { fromValue: '354px'}], position: 2500, duration: 0 },
            { id: "eid49", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "translateY", '2px', { fromValue: '2px'}], position: 2500, duration: 0 },
            { id: "eid48", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "width", '1011px', { fromValue: '1011px'}], position: 2500, duration: 0 },
            { id: "eid36", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "scaleY", '1', { fromValue: '0.3619'}], position: 0, duration: 1000 },
            { id: "eid40", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-488468");
