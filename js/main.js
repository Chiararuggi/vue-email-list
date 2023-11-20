const { createApp } = Vue

createApp({
    data() {
        return {
            userEmail: [
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
                {
                    email: "",
                },
            ],
        }
    },
    methods: {
        generateEmail(){

        },
    },
    mounted() {
        //generate email and put it into a variable
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            if(response.data.success) {
                this.userEmail.email = response.data.response;
                console.log(this.userEmail.email);
                console.log(this.userEmail);
            }
        });
        
    }
}).mount('#app')
