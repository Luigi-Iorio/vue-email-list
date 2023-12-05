const { createApp } = Vue;

createApp({
  data() {
    return {
      api: "https://flynn.boolean.careers/exercises/api/random/mail",
      mailList: [],
    };
  },
  methods: {},
  created() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.api).then((mail) => {
        this.mailList.push(mail.data.response);
      });
    }
    console.log(this.mailList);
  },
}).mount("#app");
