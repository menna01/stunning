 var arr = [];
 var arrobject=[];

 var searchBar = document.getElementById('searchBar')
 
 

 
 
var row = document.getElementById('rowData');


// ASYNC FUNCTIONS SEARCH
search('') 

async function search(q) {
    let meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`)
     meals = await meals.json();
      screenDisplay(meals.meals);
      // $('.three a').click( function(){
      //   screenDisplay(meals.meals);
      
            
      // })
      // console.log(meals.meals[0].strArea)
     return meals
     
  // desplaySec2(0);
  
}



// الجزء اللى بيعرض الصور اللى ف الاول

 function screenDisplay(arr3){
        var cartona=``;
        for(let i=0;i<arr3.length;i++){
            cartona+=`<div  class="col-md-4 col-lg-3 shadow "  >
            <div class="bg-white back overflow-hidden roaa">
              <div>
               <img idMenna="${arr3[i].idMeal}" class="w-100 idItem="${arr3[i].idMeal}" src="${arr3[i].strMealThumb}" alt="">
                 </div>    
              <div class="odam d-flex align-items-center">
                <h6 class="text-dark nora  ">${arr3[i].strMeal}</h6>
        
              </div>
            </div>
          </div>`
         
        }
        row.innerHTML=cartona;
        $('.roaa img').click(function(e){
          let id = $(e.target).attr('idMenna');
          getMeal(id);
         
  
         })
        //  $('.three a').click( function(){
        //   console.log($`arr3$()`)
        
              
        // })
  
       }
       
       $(document).ready(function(){

        $('.loading-spinner').fadeOut(1500,function(){
          $('#loading').fadeOut(1500,function(){
            $('#loading').remove();
            $('body').css('overflow','auto')
          })

        })
       
       })

       $('.five a').click(function(){
        $('#search-container').addClass('d-none')


        let boxWidth= $(".box1").outerWidth();
        $("#sideBar").animate({left:`-${boxWidth}`},800)
        $('.exit i').removeClass('fa-times')
        contactInfo()

       

       })




       function contactInfo(){
         let cartona=''
        cartona+=`<div class="contact-us bg-black text-center text-white mb-5">
        <h2>ContactUs...</h2>
      </div>



      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one    ">
          <input id="input1"  class="form-control input-border   bg-black shadow text-white " type="text" placeholder="Enter your Name">
        </div>
      </div>
      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one    ">
          <input id="input2"  class="form-control input-border   bg-black shadow text-white " type="email" placeholder="Enter your email">
        </div>
      </div>
      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one    ">
          <input id="input3"  class="form-control input-border   bg-black shadow text-white " type="text" placeholder="Enter phone">
        </div>
      </div>
      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one    ">
          <input id="input4"  class="form-control input-border   bg-black shadow text-white " type="text" placeholder="Enter Age">
        </div>
      </div>
      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one    ">
          <input id="input5"  class="form-control input-border   bg-black shadow text-white " type="password" placeholder="Enter password">
        </div>
      </div>
      <div class="col-md-6 shadoweffect ">
        <div class=" bt-one">
          <input id="input6"  class="form-control input-border   bg-black shadow text-white " type="password" placeholder="Enter Repassword">
        </div>
      </div>
      <div id="" class=" text-center  ">
        <button id="buttonid" class=" disabled  btn text-danger"> menna</button>

      </div>
`
       row.innerHTML=cartona

       
     var input1 =document.getElementById('input1');

     var buttonenabled = document.getElementById("buttonid")
    //  buttonenabled.classList.remove("disabled")
    //  var buttonenabled=getElementById("button")


     input1.addEventListener("keyup", function(){
      let value1= input1.value;
      validname(value1)
        
  



     })
   function  validname(value1){
    let regex =/^[A-Za-z]{3,8}(\s?[A-Za-z]{3,10})$/
        if(regex.test(value1) == true && value1 !=""){
          // console.log('true')
          input1.classList.add("is-valid");
          input1.classList.remove("is-invalid");
          // allIsValid()
          // buttonenabled.classList.remove("disabled")
          return true;
        }
        else{
          let fal = "false"
          // console.log(fal)
          input1.classList.add("is-invalid");
          input1.classList.remove("is-valid");
          return fal;
        }
   }







     var input2 =document.getElementById('input2');
     input2.addEventListener("keyup", function(){
      let value2=input2.value;
      validemaile(value2)
     
     })
     function validemaile (value2){
      let regex=/@[a-z]{5,10}(\.com)$/
      if(regex.test(value2)== true && value2 !=""){
        input2.classList.add("is-valid");
        input2.classList.remove("is-invalid");
        // allIsValid()
        return true

      }
      else{
        let fal = "false"
        // console.log(fal)
        input2.classList.add("is-invalid");
        input2.classList.remove("is-valid");
        return fal;
      }
     }




     var input3 =document.getElementById('input3');
     input3.addEventListener("keyup", function(){
      let value3 = input3.value;
      validphone(value3)
      
     })
     function validphone(value3){
      let regex=/^01[0125][0-9]{8}$/
      if (regex.test(value3) == true && value3 !=""){
        input3.classList.add("is-valid");
        input3.classList.remove("is-invalid");
        // allIsValid()

        return true;


      }
      else{
        let fal = "false"
        input3.classList.add("is-invalid");
        input3.classList.remove("is-valid");
        return fal;

      }
     }




     var input4 =document.getElementById('input4');
     input4.addEventListener("keyup", function(){
      let value4 = input4.value;
      validage(value4)
      
     })
     function validage(value4){
      let regex=/^([1-7][0-9]|80)$/
      if (regex.test(value4) == true && value4 !=""){
        input4.classList.add("is-valid");
        input4.classList.remove("is-invalid");
        // allIsValid()

        return true;
        


      }
      else{
        let fal = "false"
        input4.classList.add("is-invalid");
        input4.classList.remove("is-valid");
        return fal;

      }
     }










     var input5 =document.getElementById('input5');
     input5.addEventListener("keyup", function(){
      let value5 = input5.value;
      validpassword(value5)
     
     }) 
     function validpassword(value5){
       let regex=/^.{5,15}$/
      if (regex.test(value5) == true && value5 !=""){
        input5.classList.add("is-valid");
        input5.classList.remove("is-invalid");
        // allIsValid()

       
        validrepassword(value5)
        return true;


      }
      else{
        let fal = "false"
        input5.classList.add("is-invalid");
        input5.classList.remove("is-valid");
        return fal;

      }
     }
     function validrepassword(value5){
      var input6 =document.getElementById('input6');
      input6.addEventListener("keyup", function(){
       let value6 = input6.value;
      //  let regex=/^.{5,15}$/
       if (value6 == value5){
         input6.classList.add("is-valid");
         input6.classList.remove("is-invalid");
         allIsValid()

         return true;
 
 
       }
       else{
         let fal = "false"
         input6.classList.add("is-invalid");
         input6.classList.remove("is-valid");
         return fal;
 
       }
      })

     }

     

     

    function allIsValid(){
       if(validpassword()== true ){
      
          buttonenabled.classList.remove("disabled")

     }
     else{
      buttonenabled.classList.add("disabled")


     }
    }




    }

    




   
       

       $('.two a').click( function(){
        $('#search-container').addClass('d-none')




        let boxWidth= $(".box1").outerWidth();
        $("#sideBar").animate({left:`-${boxWidth}`},800)
        $('.exit i').removeClass('fa-times')



        getAllCategories();
       })
       //Area 
       $('.three a').click( function(){
        $('#search-container').addClass('d-none')



        let boxWidth= $(".box1").outerWidth();
        $("#sideBar").animate({left:`-${boxWidth}`},800)
        $('.exit i').removeClass('fa-times')



        listAllArea()
        
      
       })
       $('.four a').click(function(){
        $('#search-container').addClass('d-none')


        let boxWidth= $(".box1").outerWidth();
        $("#sideBar").animate({left:`-${boxWidth}`},800)
        $('.exit i').removeClass('fa-times')



        listAllIngredient()
        
       })
       $('.one a').click(function(){
        
              let boxWidth= $(".box1").outerWidth();
              $("#sideBar").animate({left:`-${boxWidth}`},800)
              $('.exit i').removeClass('fa-times')
      
          // }





        
        $('#search-container').removeClass('d-none')
       screenDisplay ('')       
        var searchBar = document.getElementById('searchBar-name')
        // var searchBarFirst = document.getElementById('searchBar-first')

        searchBar.addEventListener("keyup",function(){
          let mealsearch = searchBar.value
          search(mealsearch)       
               })
        var searchBarFirst = document.getElementById('searchBar-first')



              searchBarFirst.addEventListener("keyup",function(){
                let lettersearch = searchBarFirst.value
                fisrtLetter(lettersearch)
               
                    })


         
       }
       
       )
       async function fisrtLetter(Letter){
      let mealletter =   await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter}`)
      mealletter= await mealletter.json();
     let mealletters = await mealletter.meals
     screenDisplay(mealletters)
 
}
     
       


      
       async function listAllIngredient (){
        let list=  await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        list = await list.json();
        let alllist = await list.meals;
        IngredientDiv(alllist)

      }
      function IngredientDiv(arraea){
        let cora=''
        for(let i=0;i<arraea.length;i++){
          cora+=` <div  class="col-md-6 col-lg-3 shadow py-3"  >
          <div class=" area-text text-center  ">
           <div>
             <i nameofarea="${arraea[i].strIngredient}" class="fa-solid fa-bowl-food fa-3x text-success"></i>
               <h5 class="text-muted">${arraea[i].strIngredient} </h5>
            </div>
          </div>  
         </div>`
    
        }
        row.innerHTML=cora;
        $('.area-text i').click(function(e){
         let ingredientname= $(e.target).attr('nameofarea');
         getIngredient(ingredientname)
        })
        
      }
       async function getIngredient(nameingredient){
            let mealsfilter = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameingredient}`)
            mealsfilter = await mealsfilter.json();
            let ingredientof = await mealsfilter.meals
            screenDisplay(ingredientof)
            
        }





       async function listAllArea (){
      let list=  await fetch (`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      list = await list.json();
      let alllist = await list.meals;
      console.log(list)
     areaDiv(alllist)
     
  }
  function areaDiv(arraea){
    let cora=''
    for(let i=0;i<arraea.length;i++){
      cora+=` <div  class="col-md-6 col-lg-3 shadow py-3"  >
      <div class=" area-text text-center  ">
       <div>
         <i nameofarea="${arraea[i].strArea}" class="fa-solid fa-city fa-2x text-danger"></i>
           <h5 class="text-muted">${arraea[i].strArea} </h5>
        </div>
      </div>  
     </div>`

    }
    row.innerHTML=cora;
    $('.area-text i').click(function(e){
     let areaname= $(e.target).attr('nameofarea');
     filterByArea(areaname)
    })
    
  }
  


       //الجزء اللى هايتعرض جوا كل area
       async function filterByArea (area){
      let areameal=   await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area} `)
     areameal = await areameal.json();
     let infoarea= await areameal.meals
     screenDisplay(infoarea);
    console.log(infoarea)

  }

  
  


       async function getAllCategories(){
        let category =   await fetch (`https://www.themealdb.com/api/json/v1/1/categories.php`)
          category = await category.json();
          let allcategory = await category.categories;
          displayAllCategories(allcategory);
          // console.log(allcategory)
        //  displayAllCategories(category.categories)
        //  console.log(allcategory[0].strCategory) 
         //العدد14 كاتيجورى
         
        
     }

     function displayAllCategories(allcategory){
      let collection=''
      for(let i=0;i<allcategory.length;i++){

        collection+=`<div  class="col-md-6 col-lg-4 py-2 shadow "  >
        <div class="bg-white back overflow-hidden roaa">
          <div>
           <img  nameofcategory="${allcategory[i].strCategory}" idMenna="${allcategory[i].idCategory}" class="w-100 idItem="${allcategory[i].idCategory}" src="${allcategory[i].strCategoryThumb}" alt="">
             </div>    
          <div class="odam d-flex align-items-center">
            <h2  class="text-dark">${allcategory[i].strCategory}</h2>
          
    
          </div>
        </div>
      </div>`


      }
      row.innerHTML=collection
      $('.roaa img').click(function(e){
        let namemeal = $(e.target).attr('nameofcategory');
       console.log(namemeal)
       filterByCategory(namemeal)  //الاسم اللى هسرش بيه
       

       })

     }
     async function filterByCategory(category){
     let findcategory =   await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category} `)
     findcategory = await findcategory.json();
     displayMealsOfCategory(findcategory.meals)
      // console.log(findcategory.meals)
   }

   function displayMealsOfCategory(arrow){
    let collection=''
    for(let i=0;i<arrow.length;i++){

      collection+=`<div class=" col-md-6 col-lg-3 shadow "  >
      <div class="bg-white back overflow-hidden roaa">
        <div>
         <img  nameofcategory="${arrow[i].strMeal}" idMenna="${arrow[i].idMeal}" class="w-100 idItem="${arrow[i].idMeal}" src="${arrow[i].strMealThumb}" alt="">
           </div>    
        <div class="odam d-flex align-items-center">
          <h2  class="hiper text-dark">${arrow[i].strMeal}</h2>
        
  
        </div>
      </div>
    </div>`


    }
     row.innerHTML= collection
     $('.roaa img').click(function(e){
      let id = $(e.target).attr('idMenna');
      getMeal(id)

      
     

     })

    
  
    
   }
   



      //  / ASYNC FUNCTION searh by id
async function getMeal(mealID){
   let meal= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
   meal = await meal.json()
  //  console.log(meal.meals[0])
   displayMeal(meal.meals[0])
}


$(".exit i").click(function(){
    if($('#sideBar').css('left') =='-200px'){
      
    $("#sideBar").animate({left:`0`},800)
    $('.exit i').addClass('fa-times')
    
    

    }
    else{
        let boxWidth= $(".box1").outerWidth();
        $("#sideBar").animate({left:`-${boxWidth}`},800)
        $('.exit i').removeClass('fa-times')

    }
   
   
    })
// مش فاهمة ليه ال if condition
    function displayMeal(meal){
      let reci =""
      
      for(let i=1;i<=20;i++){
        if (meal[`strIngredient${i}`]){
        reci+=`<li class="my-3 mx-1 px-2 p-1 alert-success rounded"> ${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`

      }
    }


    let tags = meal.strTags?.split(",");
    let container =""
    for(let j=0;j<tags?.length;j++){
      
      container+=`<li class=" nav mx-1 p-1 alert-danger rounded siso">${tags[j]}</li>`

    }

      let str =`<div class="col-md-4 bg-black">
      <img class="w-100 "  src="${meal.strMealThumb}" alt="">  
      <h5 class="text-white"> ${meal.strMeal}</h5>      </div>
        <div class="col-md-8 bg-black">
          <h2 class="text-white">Instructions</h2>
          <p class="pOfInstructionx text-white">
          ${meal.strInstructions}  
          </p>
          <p class="pOfArea text-white">Area: ${meal.strArea}</p>
          <p class=" text-white Category">Category: ${meal.strCategory}</p>
          <h6 class="text-white">Recipes:</h6>
          <ul id="recipes" class="d-flex flex-wrap nav   ">
            
           
            
          </ul>
          <h6 class="text-white">Tages:</h6>
          <ul id="tags" class="d-flex">
            
          </ul>
          <a class="btn btn-success" href="${meal.strSource}"> Source</a>
          <a class="btn youtube" href="${meal.strYoutube}"> Youtube</a>
   
        </div>`
 
    
  
  row.innerHTML = str;
  document.getElementById('recipes').innerHTML = reci;
  document.getElementById('tags').innerHTML= container


 
}










// function displayCategories(){
    
//   let  cartona =``;
//     for(var i=0;i<arr.length;i++){
//       cartona+=`<div class="col-md-3  ">
//       <div class="  text-center">
//       <img class="w-100 h-50 " src="${arrayOfPosts[i].urlToImage}"/>
      
//         <h6 class="text-bolder ">${arrayOfPosts[i].title.split(" ").splice(0,10).join(' ') }</h6>
//         <p class="lead menna">${arrayOfPosts[i].description.split(" ").splice(0,5).join('   ')} <a href="${arrayOfPosts[i].url}"> see more</a></p>
        
//       </div>
//     </div>`
    
//     }
//     rowData.innerHTML = cartona;
    
//     }
    