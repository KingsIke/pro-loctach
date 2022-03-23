window.addEventListener("DOMContentLoaded", function(e) {
  
    let locationBox = document.querySelector("#location");
    let location = {
      latitude: "unknown",
      longitude: "unknown"
    };

    window.navigator.geolocation.getCurrentPosition(
      function(position) {

        location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };

        locationBox.value = JSON.stringify(location);
      },
      function(error) {
        locationBox.value = JSON.stringify(location);
      });

    const order = localStorage.getItem("order");
    const iceOrder = JSON.parse(order);

    if (order) {
      const ice = document.querySelector(".ice");
      const title = ice.querySelector("#title");
      const price = ice.querySelector("#price");
      const desc = ice.querySelector("#desc");
      const orderInput = document.querySelector("#ice-order");

      title.innerText = iceOrder.title;
      price.innerText = iceOrder.price;
      desc.innerText = iceOrder.desc;

      orderInput.value = order;

      const img = ice.querySelector("img");
      img.setAttribute("src", `images/${iceOrder.id}.png`);
      img.setAttribute("alt", iceOrder.title);
    }
  });