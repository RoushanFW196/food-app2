
  function appendelements(){

     return `
     function appendcategory(arr){
 
    arr.forEach(element => {
        
     let food_div=document.createElement("div");
      let p1=document.createElement("h3");
      p1.textContent=element.strCategory;
      let image=document.createElement("img");
      image.src=element.strCategoryThumb;
     
 
       food_div.append(image,p1)
 
     document.getElementById("foodcontainer").append(food_div)
 
    });
 
     }`


  }
  export default appendelements;

  