window.addEventListener("DOMContentLoaded", (e) => {
  const orderButtons = document.querySelectorAll("button[data-order]");

  orderButtons.forEach((button) => {
    
    button.addEventListener("click", (e) =>  {
      const button = e.currentTarget;
      const container = button.parentNode;

      const order = {
        id: (id = button.getAttribute("data-order")),
        title: container.querySelector(".title").innerText,
        price: container.querySelector(".price").innerText,
        desc: container.querySelector(".desc").innerText
      };

      localStorage.setItem("order", JSON.stringify(order));

      const url = window.location.href.replace("fan-order ejs", "order.ejs");
      window.location.href = url;
    });
  });
  });
