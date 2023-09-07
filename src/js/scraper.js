// fetch(
//   "https://crossorigin.me/https://www.linkedin.com/in/harry-ward-gray/index.html"
// )
fetch("https://thingproxy.freeboard.io/fetch/http://my.api.com/get/stuff")
  .then((res) => {
    console.log("successful fetch");
  })
  .catch((err) => console.log(err));
