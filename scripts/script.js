Vue.config.devtools = true;
const trigger = document.querySelector(".mainnav")

// function changeClass() {
//     trigger.classList.add("active");
//     document.querySelector(".menu-trigger").classList.add("unvisible");
// }

// function closeMenu() {
//     trigger.classList.remove("active");
//     document.querySelector(".menu-trigger").classList.remove("unvisible");

// }
function handleMenu() {
    document.querySelector(".mainnav").classList.toggle("active");
}

function closeMenu() {
    document.querySelector(".mainnav").classList.remove("active");
}



let app = new Vue({
    el: "#app",
    data: {
        Menu: [{
                Name: "Peperones Jalapeno",
                Description: "panierowane i faszerowane serem mozzarella papryczki podane z sosem Ranchera",
                Price:"10",
                Value: "1"
            },
            {
                Name: "Nachos Ranchera",
                Description: "nachosy z sosem Salsa Ranchera",
                Price:"10",
                Value: "1"
            },
            {
                Name: "Onion Rings",
                Description: "chrupiące krążki cebulowe z sosem Tejana",
                Price:"10",
                Value: "1"
            },
            {
                Name: "Palillo",
                Description: "pałeczki serowe panierowana w płatkach kukurydzianych podane z sosem Costeca",
                Price:"10",
                Value: "1"
            },


            {
                Name: "Sopa de Tomates",
                Description: "krem",
                Price:"10",
                Value: "2"
            },
            {
                Name: "Sopa Estofado",
                Description: "meksykańska zupa gulaszowa z ostrymi papryczkami i śmietaną",
                Price:"10",
                Value: "2"
            },


            {
                Name: "de pollo",
                Description: "z kurczakiem",
                Price:"10",
                Value: "3"
            },
            {
                Name: "de cerdo",
                Description: "z wieprzowiną",
                Price:"10",
                Value: "3"
            },
            {
                Name: "con camorones",
                Description: "z krewetkami",
                Price:"10",
                Value: "3"
            },
            {
                Name: "con carne",
                Description: "z rostbefem wieprzowym",
                Price:"10",
                Value: "3"
            },

            {
                Name: "chorizo",
                Description: "z kiełbasą chorizo i czerwoną cebulą",
                Price:"10",
                Value: "4"
            },
            {
                Name: "espinacas",
                Description: "ze szpinakiem i suszonymi pomidorami",
                Price:"10",
                Value: "4"
            },
            {
                Name: "con barbacoa cerdo",
                Description: "z szarpaną wieprzowiną i papryczkami",
                Price:"10",
                Value: "4"
            },

            {
                Name: "camarones torreador",
                Description: "z krewetkami czosnkowo-ziołowymi",
                Price:"10",
                Value: "5"
            },
            {
                Name: "vegetariano",
                Description: "z warzywami",
                Price:"10",
                Value: "5"
            },
            {
                Name: "con barbacoa carne",
                Description: "z szarpaną wołowiną",
                Price:"10",
                Value: "5"
            },

            {
                Name: "chili con carne",
                Description: "na ostro z wołowiną",
                Price:"10",
                Value: "6"
            },
            {
                Name: "con barbacoa cerdo",
                Description: "z szarpaną wieprzowiną",
                Price:"10",
                Value: "6"
            },

            {
                Name: "de pollo",
                Description: "z kurczakiem",
                Price:"10",
                Value: "7"
            },
            {
                Name: "con barbacao carne",
                Description: "z szarpaną wołowiną",
                Price:"10",
                Value: "7"
            },
            {
                Name: "con camarones",
                Description: "z krewetkami",
                Price:"10",
                Value: "7"
            },

            {
                Name: "chimichanga special",
                Description: "Smażona tortilla przenna faszerowana kurczakiem, kolorową papryką, czerwoną cebulą, podane z salsą i sosem guacamole",
                Price:"10",
                Value: "8"
            },

            {
                Name: "pastel de queso",
                Description: "sernik z kawałkami mango i czekolady",
                Price:"10",
                Value: "9"
            },
            {
                Name: "pastel de manzana",
                Description: "jabłecznik na ciepło z lodami waniliowymi",
                Price:"10",
                Value: "9"
            },
            {
                Name: "pastel de chocolate",
                Description: "ciasto czekoladowe z wiśniami",
                Price:"10",
                Value: "9"
            },
            {
                Name: "helado de mango",
                Description: "lody waniliowe z musem mango",
                Price:"10",
                Value: "9"
            },
        ],
        Categories: [{
                Category: "Entradas",
                Desc: "",
                Value: "1"
            },
            {
                Category: "Sopas",
                Desc: "",
                Value: "2"
            },
            {
                Category: "Fajitas",
                Desc: "Marynowane kawałki mięsa smażone z kolorową papryką i cebulą, podane na gorącej patelni z pszennymi tortillami i sosami: Ranchera, Crema Blanca i Costeca",
                Value: "3"
            },
            {
                Category: "Quesadillas",
                Desc: "Duże zapiekane tortille pszenne przekładane serem i salsą pomidorową",
                Value: "4"
            },
            {
                Category: "Tacos",
                Desc: "Duże zapiekane tortille kukurydziane z serem, fasolą pinto, czerwoną cebulą i kolorową papryką, podane z sosem Ranchera",
                Value: "5"
            },
            {
                Category: "Thamales",
                Desc: "Masa Marine - ciasto z mąki kukurydzianej faszerowane aromatycznym mięsem, zawinięte w liście kolby kukurydzy w towarzystwie sałatki ze świeżego mango",
                Value: "6"
            },
            {
                Category: "Burritos",
                Desc: "Tortilla pszenna faszerowana pieczonym mięsem, serem, ryżem i fasolą pinto, polana sosami, podana z sałatką colesław",
                Value: "7"
            },
            {
                Category: "Chimichanga",
                Desc: "Nasze danie firmowe, jedno z najstarszych w kuchni meksykańskiej, bo sięgające czasów konkwistadorów hiszpańskich (XVI / XVII w.)",
                Value: "8"
            },
            {
                Category: "Postre - desery",
                Desc: "",
                Value: "9"
            },
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
        chooseTitle: function () {
            var option = this.option;
            return this.Categories.filter(function (item) {
                if (item.Value == option) {

                    return item

                }
            })
        }
    }
});





// drinks
let appDrinks = new Vue({
    el: "#appDrinks",
    data: {
        Drinks: [
            {Name:"Finca Museum Reserva", Desc:"DO Cigales | El Coto | Hiszpania", Price:"10", Value:"3"},
            {Name:"Vida Organica Malbec", Desc:"Mendoza | Familia Zuccardi | Argentyna", Price:"10", Value:"3"},
            {Name:"Flagstone Dragon Tree", Desc:"Western Cape | Flagstone | RPA", Price:"10", Value:"3"},

            {Name:"Goru El Blanco Moscatel & Chardonnay", Desc:"Jumilla | Ego Bodegas | Hiszpania", Price:"10", Value:"4"},
            {Name:"Mud House Sauvignon Blanc", Desc:"Marlborough | Mud House | Nowa Zelandia", Price:"10", Value:"4"},

            {Name:"Federico Cava Rose Brut", Desc:"DO Cava | Marques de la Concordia | Hiszpania", Price:"10", Value:"5"},
            {Name:"Ferrari", Desc:"DOC Trentino | Ferrari | Włochy", Price:"10", Value:"5"},

            {Name:"Olmeca Silver", Desc:"40ml", Price:"10", Value:"1"},
            {Name:"Olmeca Gold", Desc:"40ml", Price:"10", Value:"1"},
            {Name:"Jose Cuervo Silver Blue Agave", Desc:"40ml", Price:"10", Value:"1"},
            {Name:"Jose Cuervo Especial", Desc:"40ml", Price:"10", Value:"1"},
            {Name:"Sierra Blanco", Desc:"40ml", Price:"10", Value:"1"},
            {Name:"Sierra Oro", Desc:"40ml", Price:"10", Value:"1"},

            {Name:"Corona", Desc:"0.33 but.", Price:"10", Value:"2"},
            {Name:"Bohemia Clasica Lager", Desc:"0.5 but", Price:"10", Value:"2"},
            {Name:"Sol", Desc:"0.33 but.", Price:"10", Value:"2"},
            {Name:"Modelo", Desc:"0.33 but.", Price:"10", Value:"2"},
            {Name:"Dia De Los Muertos Porter", Desc:"0.5 but", Price:"10", Value:"2"},
            
        ],
        Titles:[
            {Title:"Tequilas", Desc:"czyli meksykańska wódka na agawie", Price:"10", Value:"1"},
            {Title:"Cerveza / Piwo", Desc:"", Price:"10", Value:"2"},
            {Title:"Wino czerwone", Desc:"", Price:"10", Value:"3"},
            {Title:"Wino białe", Desc:"", Price:"10", Value:"4"},
            {Title:"Wino musujące", Desc:"", Price:"10", Value:"5"},
    ],
        drink: "1",
    },
    computed: {
        chooseDrink: function () {

            var drink = this.drink;
            
            return this.Drinks.filter(function (item) {
                if (item.Value == drink) {
                    
                    return item

                }
            })
        },
        chooseTitle: function () {
            var drink = this.drink;
            return this.Titles.filter(function (item) {
                if (item.Value == drink) {

                    return item

                }
            })
        }
    }
});

// select
