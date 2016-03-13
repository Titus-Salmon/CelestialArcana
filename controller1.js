'use strict';

angular.module('barebonesAngularApp').controller("theThingcontroller1", function($scope){
    
    this.blah2 = "Numerical Value = ";
    

    
    /** does this work? -- yes, this is necessary code**/   
        $scope.bgcolor = true;
        $scope.setstyle0 = function () {
            $scope.foolstyle0 = {
                /** is this a conditional qualifier?, i.e., 'choose "palegreen", or ""'? **/
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
                /** is this a conditional qualifier? **/
        $scope.setstyle1 = function () {
            $scope.magicianstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle2 = function () {
            $scope.priestessstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle3 = function () {
            $scope.empressstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle4 = function () {
            $scope.emperorstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle5 = function () {
            $scope.hierophantstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle6 = function () {
            $scope.loversstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle7 = function () {
            $scope.chariotstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle8 = function () {
            $scope.strengthstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle9 = function () {
            $scope.hermitstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle10 = function () {
            $scope.fortunestyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle11 = function () {
            $scope.justicestyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle12 = function () {
            $scope.hangedmanstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle13 = function () {
            $scope.deathstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle14 = function () {
            $scope.temperancestyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle15 = function () {
            $scope.devilstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle16 = function () {
            $scope.towerstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle17 = function () {
            $scope.starstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle18 = function () {
            $scope.moonstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle19 = function () {
            $scope.sunstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle20 = function () {
            $scope.judgmentstyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
        $scope.setstyle21 = function () {
            $scope.worldestyle1 = {
                "background-color": $scope.bgcolor ? "palegreen" : ""};};
/** does this work? -- yes, this is necessary code **/
    
    
    
    
    
    var MajArcDeckArray = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];
    
    var yourhandarray = ["null0","null1","null2","null3","null4","null5","null6","null7","null8","null9","null10","null11","null12","null13","null14","null15","null16","null17","null18","null19","null20","null21"];
    
    
    
      
    

        $scope.whateverClick1 = function () { 
           var cardcounter1 = $scope.whateverClick2=$scope.whateverClick2+1;
            var carddraw = $scope.MajArcRandomDraw = Math.floor(Math.random() * MajArcDeckArray.length);
            
                
            
                if (carddraw==0) {alert('you drew the Fool'); $scope.setstyle0(); yourhandarray.splice(0,1,'The Fool-h'); MajArcDeckArray.splice(0,1,'empty0'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==1) {alert('you drew the Magician'); $scope.setstyle1(); yourhandarray.splice(1,1,'The Magician-h'); MajArcDeckArray.splice(1,1,'empty1'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==2) {alert('you drew the High Priestess'); $scope.setstyle2(); yourhandarray.splice(2,1,'The High Priestess-h'); MajArcDeckArray.splice(2,1,'empty2'); console.log(yourhandarray); console.log(MajArcDeckArray)};
                
                if (carddraw==3) {alert('you drew the Empress'); $scope.setstyle3(); yourhandarray.splice(3,1,'The Empress-h'); MajArcDeckArray.splice(3,1,'empty3'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==4) {alert('you drew the Emperor'); $scope.setstyle4(); yourhandarray.splice(4,1,'The Emperor-h'); MajArcDeckArray.splice(4,1,'empty4'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==5) {alert('you drew the Hierophant'); $scope.setstyle5(); yourhandarray.splice(5,1,'The Hierophant-h'); MajArcDeckArray.splice(5,1,'empty5'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==6) {alert('you drew the Lovers'); $scope.setstyle6(); yourhandarray.splice(6,1,'The Lovers-h'); MajArcDeckArray.splice(6,1,'empty6'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==7) {alert('you drew the Chariot'); $scope.setstyle7(); yourhandarray.splice(7,1,'The Chariot-h'); MajArcDeckArray.splice(7,1,'empty7'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==8) {alert('you drew Strength'); $scope.setstyle8(); yourhandarray.splice(8,1,'Strength-h'); MajArcDeckArray.splice(8,1,'empty8'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==9) {alert('you drew the Hermit'); $scope.setstyle9(); yourhandarray.splice(9,1,'The Hermit-h'); MajArcDeckArray.splice(9,1,'empty9'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==10) {alert('you drew Fortune'); $scope.setstyle10(); yourhandarray.splice(10,1,'Fortune-h'); MajArcDeckArray.splice(10,1,'empty10'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==11) {alert('you drew Justice'); $scope.setstyle11(); yourhandarray.splice(11,1,'Justice-h'); MajArcDeckArray.splice(11,1,'empty11'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==12) {alert('you drew the Hanged Man'); $scope.setstyle12(); yourhandarray.splice(12,1,'The Hanged Man-h'); MajArcDeckArray.splice(12,1,'empty12'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==13) {alert('you drew Death'); $scope.setstyle13(); yourhandarray.splice(13,1,'Death-h'); MajArcDeckArray.splice(13,1,'empty13'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==14) {alert('you drew Temperance'); $scope.setstyle14(); yourhandarray.splice(14,1,'Temperance-h'); MajArcDeckArray.splice(14,1,'empty14'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==15) {alert('you drew the Devil'); $scope.setstyle15(); yourhandarray.splice(15,1,'The Devil-h'); MajArcDeckArray.splice(15,1,'empty15'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==16) {alert('you drew the Tower'); $scope.setstyle16(); yourhandarray.splice(16,1,'The Tower-h'); MajArcDeckArray.splice(16,1,'empty16'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==17) {alert('you drew the Star'); $scope.setstyle17(); yourhandarray.splice(17,1,'The Star-h'); MajArcDeckArray.splice(17,1,'empty17'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==18) {alert('you drew the Moon'); $scope.setstyle18(); yourhandarray.splice(18,1,'The Moon-h'); MajArcDeckArray.splice(18,1,'empty18'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==19) {alert('you drew the Sun'); $scope.setstyle19(); yourhandarray.splice(19,1,'The Sun-h'); MajArcDeckArray.splice(19,1,'empty19'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==20) {alert('you drew Judgment'); $scope.setstyle20(); yourhandarray.splice(20,1,'Judgment-h'); MajArcDeckArray.splice(20,1,'empty20'); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==21) {alert('you drew the World'); $scope.setstyle21(); yourhandarray.splice(21,1,'The World-h'); MajArcDeckArray.splice(21,1,'empty21'); console.log(yourhandarray); console.log(MajArcDeckArray)};
             
                                            };
});