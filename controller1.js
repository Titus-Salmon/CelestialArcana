'use strict';

/** setting up modular angular construction **/

var controllers = angular.module('barebonesAngularApp', []);

/** setting up modular angular construction **/

controllers.controller("theThingcontroller1", function($scope, $http){
    
/** accessing Random.org API -  **/
    /** using $http.post, since Random.org API apparently only accepts POST format?? From Random.org: "All interaction takes place via JSON-RPC over secure HTTP between the client application (e.g., web site or mobile app) and the RANDOM.ORG service. All invocations must be made via HTTP POST. In particular, HTTP GET is not supported." I tried $http.jsonp but coundn't get it to work. Kept getting an "Uncaught SyntaxError: Unexpected token :" error. -ts **/$http.post('https://api.random.org/json-rpc/1/invoke?callback=JSON_CALLBACK').then(function (youdontneedmeanymore){
    /**and logging a JSON callback to the console**/    console.log(youdontneedmeanymore);
    });
    
    
        /** Response Codes
            The HTTP response codes are set as follows:

            If a JSON-RPC request is successful, a HTTP response code 200 is returned.
            If a JSON-RPC request fails due to a client error (e.g., a malformed request or an attempt to invoke a nonexistant method), a HTTP response code 400 (Bad Request) or 404 (Method Not Found) is returned.
            If a JSON-RPC request fails due to a server error, a HTTP response code 500 (Internal Server Error) is returned.
            
                //Since this $http.post method returns "Object {data: Object, status: 200, config: Object, statusText: "OK"}" in console, the invocation of the Random.org API must be successful. BUT WHY DO I HAVE TO REFRESH PAGE ONCE BEFORE I GET THE RETURN? -ts
          **/
    
   
    
/** accessing Random.org API **/
    
    
    
    this.blah2 = "Numerical Value = ";
    

    

    
    /** defines background color styles for each trump #. every time a trump is drawn, the cell corresponding to that trump# will be highlighted with a specific background color  **/   
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
/** defines background color styles for each trump #. every time a trump is drawn, the cell corresponding to that trump# will be highlighted with a specific background color  **/
    
    
    
    
    
    var MajArcDeckArray = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"];
    
    var yourhandarray = ["null0","null1","null2","null3","null4","null5","null6","null7","null8","null9","null10","null11","null12","null13","null14","null15","null16","null17","null18","null19","null20","null21"];
    
    
    
      $scope.fetchnumber = function (){
          $http.get('https://www.random.org/integers/?num=1&min=0&max='+(MajArcDeckArray.length-1)+'&col=1&base=10&format=plain&rnd=new').then(function (random1){
        console.log(random1);
              $scope.whateverClick1(random1.data)
        });
      };
    

        $scope.whateverClick1 = function (randomnumber) {
    /** retrieves single random # from Random.org API, and displays in console.log **/
    $http.get('https://www.random.org/integers/?num=1&min=1&max=22&col=1&base=10&format=plain&rnd=new').then(function (random1){
        console.log(random1);
    });
    /** retrieves single random # from Random.org API, and displays in console.log **/
           var cardcounter1 = $scope.whateverClick2=$scope.whateverClick2+1;
            console.log($scope.whateverClick2);
            var carddraw = $scope.MajArcRandomDraw = randomnumber;
            
                
            
                if (carddraw==0) {alert('you drew ' + MajArcDeckArray[0]); $scope.setstyle0(); yourhandarray.splice(0,1,'The Fool-h'); MajArcDeckArray.splice(0,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==1) {alert('you drew ' + MajArcDeckArray[1]); $scope.setstyle1(); yourhandarray.splice(1,1,'The Magician-h'); MajArcDeckArray.splice(1,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==2) {alert('you drew ' + MajArcDeckArray[2]); $scope.setstyle2(); yourhandarray.splice(2,1,'The High Priestess-h'); MajArcDeckArray.splice(2,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
                
                if (carddraw==3) {alert('you drew ' + MajArcDeckArray[3]); $scope.setstyle3(); yourhandarray.splice(3,1,'The Empress-h'); MajArcDeckArray.splice(3,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==4) {alert('you drew ' + MajArcDeckArray[4]); $scope.setstyle4(); yourhandarray.splice(4,1,'The Emperor-h'); MajArcDeckArray.splice(4,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==5) {alert('you drew ' + MajArcDeckArray[5]); $scope.setstyle5(); yourhandarray.splice(5,1,'The Hierophant-h'); MajArcDeckArray.splice(5,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==6) {alert('you drew ' + MajArcDeckArray[6]); $scope.setstyle6(); yourhandarray.splice(6,1,'The Lovers-h'); MajArcDeckArray.splice(6,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==7) {alert('you drew ' + MajArcDeckArray[7]); $scope.setstyle7(); yourhandarray.splice(7,1,'The Chariot-h'); MajArcDeckArray.splice(7,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==8) {alert('you drew ' + MajArcDeckArray[8]); $scope.setstyle8(); yourhandarray.splice(8,1,'Strength-h'); MajArcDeckArray.splice(8,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==9) {alert('you drew ' + MajArcDeckArray[9]); $scope.setstyle9(); yourhandarray.splice(9,1,'The Hermit-h'); MajArcDeckArray.splice(9,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==10) {alert('you drew ' + MajArcDeckArray[10]); $scope.setstyle10(); yourhandarray.splice(10,1,'Fortune-h'); MajArcDeckArray.splice(10,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==11) {alert('you drew ' + MajArcDeckArray[11]); $scope.setstyle11(); yourhandarray.splice(11,1,'Justice-h'); MajArcDeckArray.splice(11,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==12) {alert('you drew ' + MajArcDeckArray[12]); $scope.setstyle12(); yourhandarray.splice(12,1,'The Hanged Man-h'); MajArcDeckArray.splice(12,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==13) {alert('you drew ' + MajArcDeckArray[13]); $scope.setstyle13(); yourhandarray.splice(13,1,'Death-h'); MajArcDeckArray.splice(13,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==14) {alert('you drew ' + MajArcDeckArray[14]); $scope.setstyle14(); yourhandarray.splice(14,1,'Temperance-h'); MajArcDeckArray.splice(14,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==15) {alert('you drew ' + MajArcDeckArray[15]); $scope.setstyle15(); yourhandarray.splice(15,1,'The Devil-h'); MajArcDeckArray.splice(15,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==16) {alert('you drew ' + MajArcDeckArray[16]); $scope.setstyle16(); yourhandarray.splice(16,1,'The Tower-h'); MajArcDeckArray.splice(16,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==17) {alert('you drew ' + MajArcDeckArray[17]); $scope.setstyle17(); yourhandarray.splice(17,1,'The Star-h'); MajArcDeckArray.splice(17,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==18) {alert('you drew ' + MajArcDeckArray[18]); $scope.setstyle18(); yourhandarray.splice(18,1,'The Moon-h'); MajArcDeckArray.splice(18,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==19) {alert('you drew ' + MajArcDeckArray[19]); $scope.setstyle19(); yourhandarray.splice(19,1,'The Sun-h'); MajArcDeckArray.splice(19,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==20) {alert('you drew ' + MajArcDeckArray[20]); $scope.setstyle20(); yourhandarray.splice(20,1,'Judgment-h'); MajArcDeckArray.splice(20,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
            
                if (carddraw==21) {alert('you drew ' + MajArcDeckArray[21]); $scope.setstyle21(); yourhandarray.splice(21,1,'The World-h'); MajArcDeckArray.splice(21,1); console.log(yourhandarray); console.log(MajArcDeckArray)};
             
                                            };
});

/** now you simply need to make it impossible to draw the same card twice. presumably a function of some sort... or an angular 'listener', or a combo, or blahblahblah **/