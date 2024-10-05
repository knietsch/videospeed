// ==UserScript==
// @name         Hotkey Script for Disney+
// @namespace    https://github.com/knietsch/videospeed
// @version      0.1
// @description  change videospeed ctrl+y=1.0, ctrl+x=2
// @author       NKnietsch
// @match        https://www.disneyplus.com/de-de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funktion 1
    function functionOne() {
        //alert('Funktion 1 ausgeführt!');
        //javascript:(()=>{
        document.getElementsByTagName('video')[0].playbackRate = 1;
        /* document.getElementsByTagName('video')[0].requestFullscreen()*/
        ;document.getElementById('pause').checked=false;
    //})();
    }

    // Funktion 2
    function functionTwo() {
        //alert('Funktion 2 ausgeführt!');
        document.getElementsByTagName('video')[0].playbackRate = 2;
    }

    // Hotkey für Funktion 1 (Strg + 1)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'y') {
            functionOne();
        }
    });

    // Hotkey für Funktion 2 (Strg + 2)
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'x') {
            functionTwo();
        }
    });
    //console.log("Hotkey Script for Disney+");
    //functionOne();

})();
