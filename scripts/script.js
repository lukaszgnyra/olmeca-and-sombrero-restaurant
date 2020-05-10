const trigger = document.querySelector(".mainnav")

function changeClass() {
    trigger.classList.add("active");
    document.querySelector(".menu-trigger").classList.add("unvisible");
}

function closeMenu() {
    trigger.classList.remove("active");
    document.querySelector(".menu-trigger").classList.remove("unvisible");

}



let app = new Vue({
    el: "#app",
    data: {
        Menu: [{
                Name: "Peperones Jalapeno",
                Description: "panierowane i faszerowane serem mozzarella papryczki podane z sosem Ranchera",
                Value: "1"
            },
            {
                Name: "Nachos Ranchera",
                Description: "nachosy z sosem Salsa Ranchera",
                Value: "1"
            },
            {
                Name: "Onion Rings",
                Description: "chrupiące krążki cebulowe z sosem Tejana",
                Value: "1"
            },
            {
                Name: "Palillo",
                Description: "pałeczki serowe panierowana w płatkach kukurydzianych podane z sosem Costeca",
                Value: "1"
            },


            {
                Name: "Sopa de Tomates",
                Description: "krem",
                Value: "2"
            },
            {
                Name: "Sopa Estofado",
                Description: "meksykańska zupa gulaszowa z ostrymi papryczkami i śmietaną",
                Value: "2"
            },


            {
                Name: "de pollo",
                Description: "z kurczakiem",
                Value: "3"
            },
            {
                Name: "de cerdo",
                Description: "z wieprzowiną",
                Value: "3"
            },
            {
                Name: "con camorones",
                Description: "z krewetkami",
                Value: "3"
            },
            {
                Name: "con carne",
                Description: "z rostbefem wieprzowym",
                Value: "3"
            },

            {
                Name: "chorizo",
                Description: "z kiełbasą chorizo i czerwoną cebulą",
                Value: "4"
            },
            {
                Name: "espinacas",
                Description: "ze szpinakiem i suszonymi pomidorami",
                Value: "4"
            },
            {
                Name: "con barbacoa cerdo",
                Description: "z szarpaną wieprzowiną i papryczkami",
                Value: "4"
            },

            {
                Name: "camarones torreador",
                Description: "z krewetkami czosnkowo-ziołowymi",
                Value: "5"
            },
            {
                Name: "vegetariano",
                Description: "z warzywami",
                Value: "5"
            },
            {
                Name: "con barbacoa carne",
                Description: "z szarpaną wołowiną",
                Value: "5"
            },

            {
                Name: "chili con carne",
                Description: "na ostro z wołowiną",
                Value: "6"
            },
            {
                Name: "con barbacoa cerdo",
                Description: "z szarpaną wieprzowiną",
                Value: "6"
            },

            {
                Name: "de pollo",
                Description: "z kurczakiem",
                Value: "7"
            },
            {
                Name: "con barbacao carne",
                Description: "z szarpaną wołowiną",
                Value: "7"
            },
            {
                Name: "con camarones",
                Description: "z krewetkami",
                Value: "7"
            },

            {
                Name: "chimichanga special",
                Description: "Smażona tortilla przenna faszerowana kurczakiem, kolorową papryką, czerwoną cebulą, podane z salsą i sosem guacamole",
                Value: "8"
            },

            {
                Name: "pastel de queso",
                Description: "sernik z kawałkami mango i czekolady",
                Value: "9"
            },
            {
                Name: "pastel de manzana",
                Description: "jabłecznik na ciepło z lodami waniliowymi",
                Value: "9"
            },
            {
                Name: "pastel de chocolate",
                Description: "ciasto czekoladowe z wiśniami",
                Value: "9"
            },
            {
                Name: "helado de mango",
                Description: "lody waniliowe z musem mango",
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

// select
