const { createApp } = Vue;

createApp({
  data() {
    return {
      userEmail: [],
    };
  },
  methods: {
  },
  mounted() {
    //generate email and put it into a variable
    for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        console.log(response.data);
        this.userEmail[i] = response.data.response;
      });
    
    }
  },
}).mount("#app");
