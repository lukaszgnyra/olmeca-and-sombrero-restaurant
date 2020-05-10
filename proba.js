let app = new Vue({
    el: "#app",
    data: {
        Menu:[
        
        {Category:"Entradas", Desc:"", Name:"Peperones Jalapeno", Description:"panierowane i faszerowane serem mozzarella papryczki podane z sosem Ranchera", Value:"1"},
        {Category:"", Desc:"", Name:"Nachos Ranchera", Description:"nachosy z sosem Salsa Ranchera", Value:"1"},
        {Category:"", Desc:"", Name:"Onion Rings", Description:"chrupiące krążki cebulowe z sosem Tejana", Value:"1"},
        {Category:"", Desc:"", Name:"Palillo", Description:"pałeczki serowe panierowana w płatkach kukurydzianych podane z sosem Costeca", Value:"1"},
        
        {Category:"Sopa", Desc:"", Name:"Sopa de Tomates", Description:"krem", Value:"1"},
        {Category:"", Desc:"", Name:"Sopa Estofado", Description:"meksykańska zupa gulaszowa z ostrymi papryczkami i śmietaną", Value:"1"},
        
        {Category:"Fajitas", Desc:"Marynowane kawałki mięsa smażone z kolorową papryką i cebulą, podane na gorącej patelni z pszennymi tortillami i sosami: Ranchera, Crema Blanca i Costeca.", Name:"de pollo", Description:"z kurczakiem", Value:"2"},
        {Category:"", Desc:"", Name:"de cerdo", Description:"z wieprzowiną", Value:"2"},
        {Category:"", Desc:"", Name:"con camorones", Description:"z krewetkami", Value:"2"},
        {Category:"", Desc:"", Name:"con carne", Description:"z rostbefem wieprzowym", Value:"2"},

        {Category:"Quesadillas", Desc:"Duże zapiekane tortille pszenne przekładane serem i salsą pomidorową.", Name:"chorizo", Description:"z kiełbasą chorizo i czerwoną cebulą", Value:"2"},
        {Category:"", Desc:"", Name:"espinacas", Description:"ze szpinakiem i suszonymi pomidorami", Value:"2"},
        {Category:"", Desc:"", Name:"con barbacoa cerdo", Description:"z szarpaną wieprzowiną i papryczkami", Value:"2"},

        {Category:"Tacos", Desc:"Duże zapiekane tortille kukurydziane z serem, fasolą pinto, czerwoną cebulą i kolorową papryką, podane z sosem Ranchera", Name:"camarones torreador", Description:"z krewetkami czosnkowo-ziołowymi", Value:"3"},
        {Category:"", Desc:"", Name:"vegetariano", Description:"z warzywami", Value:"3"},
        {Category:"", Desc:"", Name:"con barbacoa carne", Description:"z szarpaną wołowiną", Value:"3"},

        {Category:"Thamales", Desc:"Masa Marine - ciasto z mąki kukurydzianej faszerowane aromatycznym mięsem, zawinięte w liście kolby kukurydzy w towarzystwie sałatki ze świeżego mango", Name:"chili con carne", Description:"na ostro z wołowiną", Value:"3"},
        {Category:"", Desc:"", Name:"con barbacoa cerdo", Description:"z szarpaną wieprzowiną", Value:"3"},

        {Category:"Burritos", Desc:"Tortilla pszenna faszerowana pieczonym mięsem, serem, ryżem i fasolą pinto, polana sosami, podana z sałatką colesław", Name:"de pollo", Description:"z kurczakiem", Value:"4"},
        {Category:"", Desc:"", Name:"con barbacao carne", Description:"z szarpaną wołowiną", Value:"4"},
        {Category:"", Desc:"", Name:"con camarones", Description:"z krewetkami", Value:"4"},

        {Category:"Chimichanga", Desc:"Nasze danie firmowe, jedno z najstarszych w kuchni meksykańskiej, bo sięgające czasów konkwistadorów hiszpańskich (XVI / XVII w.)", Name:"chimichanga special", Description:"Smażona tortilla przenna faszerowana kurczakiem, kolorową papryką, czerwoną cebulą, podane z salsą i sosem guacamole", Value:"4"},

        {Category:"Postre - desery", Desc:"", Name:"postel de quero", Description:"sernik z kawałkami mango i czekolady", Value:"5"},
        {Category:"", Desc:"", Name:"postel de manzane", Description:"jabłecznik na ciepło z lodami waniliowymi", Value:"5"},
        {Category:"", Desc:"", Name:"postel de chocolate", Description:"ciasto czekoladowe z wiśniami", Value:"5"},
        {Category:"", Desc:"", Name:"helado de mango", Description:"lody waniliowe z musem mango", Value:"5"},
    ],
    Tacos:[
        {Category:"", Desc:"", Name:"vegetariano", Description:"z warzywami", Value:"3"},
        {Category:"", Desc:"", Name:"con barbacoa carne", Description:"z szarpaną wołowiną", Value:"3"},
    ],
    Burritos:[
        {Category:"", Desc:"", Name:"con barbacao carne", Description:"z szarpaną wołowiną", Value:"4"},
        {Category:"", Desc:"", Name:"con camarones", Description:"z krewetkami", Value:"4"},
],
  Categories:[
        
        {Category1:"Tacos", Category2:"Burritos", Value:"3"},
        
    ],      

        option: "1",
    },
    computed: {
        chooseOption: function () {

            var option = this.option;
            return this.Menu.filter(function (item) {
                if (item.Value == option) {
                    
                    return item
                    
                }
            })
        },  
        chooseBurrito: function () {

            var option = this.option;
            return this.Burritos.filter(function (item) {
                if (item.Value == option) {
                    
                    return item
                    
                }
            })
        },  
        chooseTaco: function () {

            var option = this.option;
            return this.Tacos.filter(function (item) {
                if (item.Value == option) {
                    
                    return item
                    
                }
            })
        }, 
        chooseTitle: function (){
            var option = this.option;
            return this.Categories.filter(function (item) {
                if (item.Value == option) {
                    
                    return item
                    
                }
            })
        } 
    }
});

var x, i, j, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);