angular.module('barebonesAngularApp').controller("theThingcontroller1", function($scope){
    $scope.blah1 = "what up?";
    this.blah2 = "Numerical Value = ";
    
/** does this work? **/   
        $scope.bgcolor = true;
        $scope.setstyle = function () {
            $scope.customestyle = {
                "background-color": $scope.bgcolor ? "aqua" : ""};};
        
/** does this work? **/
    

        $scope.whateverClick1 = function () {
            var carddraw = $scope.MajArcRandomDraw = Math.floor(Math.random() * 22);
                if (carddraw==0) {alert('you drew the Fool'); $scope.setstyle();};
                if (carddraw==1) {alert('you drew the Magician')};
                if (carddraw==2) {alert('you drew the High Priestess')};
                if (carddraw==3) {alert('you drew the Empress')};
                if (carddraw==4) {alert('you drew the Emperor')};
                if (carddraw==5) {alert('you drew the Hierophant')};
                if (carddraw==6) {alert('you drew the Lovers')};
                if (carddraw==7) {alert('you drew the Chariot')};
                if (carddraw==8) {alert('you drew Strength')};
                if (carddraw==9) {alert('you drew the Hermit')};
                if (carddraw==10) {alert('you drew Fortune')};
                if (carddraw==11) {alert('you drew Justice')};
                if (carddraw==12) {alert('you drew the Hanged Man')};
                if (carddraw==13) {alert('you drew Death')};
                if (carddraw==14) {alert('you drew Temperance')};
                if (carddraw==15) {alert('you drew the Devil')};
                if (carddraw==16) {alert('you drew the Tower')};
                if (carddraw==17) {alert('you drew the Star')};
                if (carddraw==18) {alert('you drew the Moon')};
                if (carddraw==19) {alert('you drew the Sun')};
                if (carddraw==20) {alert('you drew Judgment')};
                if (carddraw==21) {alert('you drew the World')};
            };
            
        
    $scope.trumps = [
                { ID: 0, TrumpName: "The Fool", AlefBeit: "Mem", elementalPlanetary: "Water", celestialFunctionay: "NCP"  },
                { ID: "I", TrumpName: "The Magician", AlefBeit: "Alef", elementalPlanetary: "Air", celestialFunctionay: "Precessional 'binding force'"  },
                { ID: "II", TrumpName: "The High Priestess", AlefBeit: "Beit", elementalPlanetary: "Moon", celestialFunctionay: "Corona Borealis"  },
                { ID: "III", TrumpName: "The Empress", AlefBeit: "Gimel", elementalPlanetary: "Venus", celestialFunctionay: "Thuban/NGP"  },
                { ID: "IV", TrumpName: "The Emperor", AlefBeit: "Hei", elementalPlanetary: "Mars", celestialFunctionay: "Aries"  },
            ];
        
    
});

    



