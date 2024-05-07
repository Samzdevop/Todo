var lis = document.querySelectorAll("li");

for(var i = 0; i <lis.length; i++){
    lis[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
     });

     lis[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
     });
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
// Using forEach to achieve same result as the intial code
// lis.forEach(function(values){
//     values.addEventListener("mouseover", function(){
//                 this.style.color = "green";
//              });
        
//              values.addEventListener("mouseout", function(){
//                 this.style.color = "black";
//              });
//             values.addEventListener("click", function(){
//                 this.classList.toggle("done");
//             }) 
// }) 
