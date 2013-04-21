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
         "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)": [
            ["transform", "translateX", '-967px'],
            ["transform", "translateY", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid36", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "scaleY", '1', { fromValue: '0.3619'}], position: 0, duration: 1000 },
            { id: "eid40", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid41", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateX", '-60px', { fromValue: '-967px'}], position: 0, duration: 2000 },
            { id: "eid35", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "scaleX", '1', { fromValue: '0.3619'}], position: 0, duration: 1000 }         ]
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
