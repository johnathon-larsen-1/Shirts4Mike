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
         "body > div:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '-100px']
         ],
         "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)": [
            ["transform", "translateX", '-967px'],
            ["style", "height", '38px'],
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '0px'],
            ["style", "width", '980px']
         ],
         "${_content} > div:nth-child(2)": [
            ["style", "height", '378px'],
            ["transform", "translateX", '-10px'],
            ["transform", "translateY", '24px']
         ],
         "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)": [
            ["transform", "rotateZ", '0deg']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '-101px']
         ],
         "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '-101px']
         ],
         "${_content} > div:nth-child(1)": [
            ["transform", "translateX", '2px']
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
            { id: "eid60", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateY", '0px', { fromValue: '-101px'}], position: 0, duration: 1000 },
            { id: "eid22", tween: [ "style", "${_content} > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid41", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateX", '-60px', { fromValue: '-967px'}], position: 0, duration: 2000 },
            { id: "eid90", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateX", '-60px', { fromValue: '-60px'}], position: 2500, duration: 0 },
            { id: "eid88", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "scaleX", '2.76316', { fromValue: '1'}], position: 1000, duration: 1500 },
            { id: "eid51", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid61", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
            { id: "eid48", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "width", '1011px', { fromValue: '1011px'}], position: 2500, duration: 0 },
            { id: "eid74", tween: [ "transform", "body > div:nth-child(1)", "translateY", '-4px', { fromValue: '-100px'}], position: 0, duration: 800 },
            { id: "eid49", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "translateY", '2px', { fromValue: '2px'}], position: 2500, duration: 0 },
            { id: "eid36", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)", "scaleY", '1', { fromValue: '0.3619'}], position: 0, duration: 1000 },
            { id: "eid47", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2500 },
            { id: "eid87", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "height", '38px', { fromValue: '38px'}], position: 2000, duration: 0 },
            { id: "eid93", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "height", '38px', { fromValue: '38px'}], position: 2500, duration: 0 },
            { id: "eid72", tween: [ "transform", "body > div:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "transform", "body > div:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 800, duration: 0 },
            { id: "eid59", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)", "translateY", '0px', { fromValue: '-101px'}], position: 0, duration: 1000 },
            { id: "eid89", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "scaleY", '2.76316', { fromValue: '1'}], position: 1000, duration: 1500 },
            { id: "eid40", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid85", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 2000, duration: 0 },
            { id: "eid91", tween: [ "transform", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "translateY", '0px', { fromValue: '0px'}], position: 2500, duration: 0 },
            { id: "eid77", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid78", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "rotateZ", '0deg', { fromValue: '-8deg'}], position: 250, duration: 250 },
            { id: "eid79", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "rotateZ", '8deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid80", tween: [ "transform", "${_content} > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)", "rotateZ", '0deg', { fromValue: '8deg'}], position: 750, duration: 250 },
            { id: "eid50", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2)", "height", '354px', { fromValue: '354px'}], position: 2500, duration: 0 },
            { id: "eid86", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "width", '980px', { fromValue: '980px'}], position: 2000, duration: 0 },
            { id: "eid92", tween: [ "style", "${_content} > div:nth-child(2) > div:nth-child(1) > h2:nth-child(1)", "width", '980px', { fromValue: '980px'}], position: 2500, duration: 0 },
            { id: "eid52", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid62", tween: [ "transform", "body > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)", "translateX", '0px', { fromValue: '0px'}], position: 1000, duration: 0 },
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
