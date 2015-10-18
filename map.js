// create a map in order to show the route on it
var map;
        
        function initMap(){
            // The initial map
            map = new google.maps.Map(document.getElementById('map'),{
                center: {lat: -37.8136, lng: 144.9631},
                zoom: 12
            });
        }
// save table routes in local storage

var userConfirm = 0;
var selectOrder =1;
var i = 0;
var selection; 

 function loadingFun(routes) {// Loading local storage 
     var selection = document.getElementById("selection");
     var  routesTable = document.getElementById("contacts-table");
     var routesRow = routesTable.insertRow(1);
     if (i>5){
         routes.shift();
     }
     for(var i = 0; i <=5; i++){
         if (selection.selectedItem!==0){// user have selected one route
             var selectData = [];
         selectData[selectOrder] = JSON.parse(localStorage.getItem(i));// get value from local storage
          selectData.push(routes);
         }
         
         
         
         var routesCell = routesRow.insertCell(0);
         routesCell.innerHTML = document.getElementById("selectData").value;
         
         }
 }
                     
                     
    function delectFun(){
      var userConfirm = window.confirm('Are you sure you want to delect the data?');
        if ( userConfirm === true){
            if ( selection.selectedItem!== 0);{
                localStorage.removeItem(i);// remove data from local storage
            }
            
            alert ('Data has been delected')
        }
        else{
            alert('You cancelled to delect data');
        }
    }

   
        

        
            
                     
        
                     
                     
                     
                     
                
                     
                     
    
 
         
     
     
    
 
    
    

  
