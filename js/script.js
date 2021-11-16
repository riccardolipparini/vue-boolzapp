var chat = new Vue({
    el:"#containerApp",
    data:{
        friends:[
        {
            name: "Michele",
            text: "si fatto!",
            image:"img/avatar_1.jpg",
            messages:[
                {
                    ownChat:"Hai portato a spasso il cane?",
                    ownDate: "10/01/2020 15:30:55",
                    friendChat:"si fatto",
                    friendDate: "10/01/2020 15:33:25"

                },
            ],
            
            
        },
        // {
        //     name: "Paolo",
        //     text: "Tutto fatto!",
        //     ownChat:"ciao come va?",
        //     friendChat:"tutto a posto grazie!",
        //     image:"img/avatar_2.jpg",
        //     messages:[
        //         {
        //             ownChat:"Hai portato a spasso il cane?",
        //             friendChat:"si fatto",
        //             ownDate: "10/01/2020 15:30:55",
        //             friendDate: "10/01/2020 15:33:25"

        //         },
        //     ],
        // },
        // {
        //     name: "Giulia",
        //     text: "Tutto fatto!",
        //     ownChat:"ciao come va?",
        //     friendChat:"tutto a posto grazie!",
        //     image:"img/avatar_3.jpg",
        //     messages:[
        //         {
        //             ownChat:"Hai portato a spasso il cane?",
        //             friendChat:"si fatto",
        //             ownDate: "10/01/2020 15:30:55",
        //             friendDate: "10/01/2020 15:33:25"

        //         },
        //     ],
        // },
        // {
        //     name: "Francesca",
        //     text: "Tutto fatto!",
        //     ownChat:"ciao come va?",
        //     friendChat:"tutto a posto grazie!",
        //     image:"img/avatar_4.jpg",
        //     messages:[
        //         {
        //             ownChat:"Hai portato a spasso il cane?",
        //             friendChat:"si fatto",
        //             ownDate: "10/01/2020 15:30:55",
        //             friendDate: "10/01/2020 15:33:25"

        //         },
        //     ],
        // }
        
    ]
    }
})