
// assign Varriables 

let addImage = document.getElementById("addImage");
let imageUrl = document.getElementById("imageUrl");
let imageContainer = document.getElementById("photoGaleryDev");
let searchImage = document.getElementById("searchImage");
let imageSearch = document.getElementById ("btn-accent");
let title = document.getElementById("title");
// Creat an empty Array
let photosArray = [];
// onclick eventhundler
addImage.addEventListener("click", function(){
// give a value to the url input
    const addName =(ev)=>{
    ev.preventDefault();
}
        let imageUrl = document.getElementById("imageUrl").value;
        let title = document.getElementById("title").value;
        console.log(addName);
        if(imageUrl){

            // assign a varriable with an img tag
            const item = document.createElement("img");
            // add the img created to the array
            photosArray.push(item);
            item.src = imageUrl
        //    add the image to html div container
            imageContainer.appendChild(item);
            // give the img tag it a class and style
            item.classList ="border rounded shadow ";
            // remove the value of the url
            document.getElementById("imageUrl").value = "";
            document.getElementById("title").value ="";
        }else{
            alert("please provide a Url");
        }

});


//  



// // loop trough the array
// function imageLoop(){
//     // onclick event hundler
//     imageSearch.addEventListener("click",function(){
//         // get the search value
//         let searchImage = document.getElementById("searchImage").value;
//         // loop through the array to find the name attribute
//             for (let index = 0; index < photosArray.length; index++) {
//             if (searchImage == photosArray.findIndex(this.getAttributeNames)) {
//                 console.log(imageLoop)
//             }else{

//             } 
//         }
        

//     })
// }
   