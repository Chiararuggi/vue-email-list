const { createApp } = Vue

createApp({
    data() {
        return {
            userEmail: [],
        }
    },
    methods: {
        generateEmail(){

        },
    },
    mounted() {
        //generate email and put it into a variable
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
            for (let i = 0; i < 10; i++) {
                this.userEmail[i] = response.data.response;
                console.log(this.userEmail); 
            }
        });
    }
}).mount('#app')
