angular.module('barebonesAngularApp').controller("theThingcontroller1", function($scope){
    
    this.blah2 = "Numerical Value = ";
    
/** does this work? -- yes, this is necessary code**/   
        $scope.bgcolor = true;
        $scope.setstyle0 = function () {
            $scope.foolstyle0 = {
                /** is this a conditional qualifier? **/
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
        
/** does this work? **/
    
    var MajArcDeckArray = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];
    
    var yourhandarray = [];
    
    
    
      
    

        $scope.whateverClick1 = function () { 
           var cardcounter1 = $scope.whateverClick2=$scope.whateverClick2+1;
            var carddraw = $scope.MajArcRandomDraw = Math.floor(Math.random() * MajArcDeckArray.length);
            
                
            
                if (carddraw==0) {alert('you drew the Fool'); $scope.setstyle0(); yourhandarray.push('The Fool'); MajArcDeckArray.splice(0,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==1) {alert('you drew the Magician'); $scope.setstyle1(); yourhandarray.push('The Magician'); MajArcDeckArray.splice(1,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==2) {alert('you drew the High Priestess'); $scope.setstyle2(); yourhandarray.push('The High Priestess'); MajArcDeckArray.splice(2,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
                
                if (carddraw==3) {alert('you drew the Empress'); $scope.setstyle3(); yourhandarray.push('The Empress'); MajArcDeckArray.splice(3,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==4) {alert('you drew the Emperor'); $scope.setstyle4(); yourhandarray.push('The Emperor'); MajArcDeckArray.splice(4,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==5) {alert('you drew the Hierophant'); $scope.setstyle5(); yourhandarray.push('The Hierophant'); MajArcDeckArray.splice(5,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==6) {alert('you drew the Lovers'); $scope.setstyle6(); yourhandarray.push('The Lovers'); MajArcDeckArray.splice(6,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==7) {alert('you drew the Chariot'); $scope.setstyle7(); yourhandarray.push('The Chariot'); MajArcDeckArray.splice(7,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==8) {alert('you drew Strength'); $scope.setstyle8(); yourhandarray.push('Strength'); MajArcDeckArray.splice(8,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==9) {alert('you drew the Hermit'); $scope.setstyle9(); yourhandarray.push('The Hermit'); MajArcDeckArray.splice(9,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==10) {alert('you drew Fortune'); $scope.setstyle10(); yourhandarray.push('Fortune'); MajArcDeckArray.splice(10,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==11) {alert('you drew Justice'); $scope.setstyle11(); yourhandarray.push('Justice'); MajArcDeckArray.splice(11,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==12) {alert('you drew the Hanged Man'); $scope.setstyle12(); yourhandarray.push('The Hanged Man'); MajArcDeckArray.splice(12,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==13) {alert('you drew Death'); $scope.setstyle13(); yourhandarray.push('Death'); MajArcDeckArray.splice(13,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==14) {alert('you drew Temperance'); $scope.setstyle14(); yourhandarray.push('Temperance'); MajArcDeckArray.splice(14,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==15) {alert('you drew the Devil'); $scope.setstyle15(); yourhandarray.push('The Devil'); MajArcDeckArray.splice(15,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==16) {alert('you drew the Tower'); $scope.setstyle16(); yourhandarray.push('The Tower'); MajArcDeckArray.splice(16,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==17) {alert('you drew the Star'); $scope.setstyle17(); yourhandarray.push('The Star'); MajArcDeckArray.splice(17,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==18) {alert('you drew the Moon'); $scope.setstyle18(); yourhandarray.push('The Moon'); MajArcDeckArray.splice(18,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==19) {alert('you drew the Sun'); $scope.setstyle19(); yourhandarray.push('The Sun'); MajArcDeckArray.splice(19,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==20) {alert('you drew Judgment'); $scope.setstyle20(); yourhandarray.push('Judgment'); MajArcDeckArray.splice(20,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==21) {alert('you drew the World'); $scope.setstyle21(); yourhandarray.push('The World'); MajArcDeckArray.splice(21,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
             
                                            };
});