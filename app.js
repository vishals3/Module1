var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
  $scope.txtValue="";

  $scope.CountItems=function(){
debugger;
  var items = $scope.txtValue.split(',');
  var actualItem=cleanArray(items);
   $scope.class = "green";
   $scope.inputBorder="InputBorderGreen";
if(actualItem.length<1){
  $scope.result = "Please enter data first!";
   $scope.class = "red";
   $scope.inputBorder="InputBorderRed";
  return;
}

if(actualItem.length>3)
  $scope.result  = "Too much!";
else
    $scope.result  = "Enjoy!";

 }

 function cleanArray(actual) {
   debugger;
   var newArray = new Array();
   for (var i = 0; i < actual.length; i++) {
      
     if (actual[i].trim().length>0) {
       newArray.push(actual[i]);
     }
   }
   return newArray;
 }

});
