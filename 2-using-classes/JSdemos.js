        class Person {
            constructor(name){
                this.name = name;
                this.ID = ID;
            }

            // Method
            GetName(){
                return this.name;
            }
        }


        // // class expression
        // class Person {
        //     constructor(name, ID){
        //         this.name = name;
        //         this.ID = ID;
        //     }

        //     // Method
        //     GetName(){
        //         return this.name;
        //     }
        // }

        // to add one static method
        static CreateAnon (gender){
            let name = gender == "male" ? "John": "Jane";

            return new Person()
        }

        let person = new Person("James Doe");
        console.log(person.createAnonymous(person(GetName())))