window.addEventListener("DOMContentLoaded", (e) => {
   console.log('start now');
  //  document.querySelector('#price').innerHTML = "40";
   const press =document.querySelector('#order');
  
   press.addEventListener('click',(e) =>{

    const button = e.target;
    const container = button.parentNode

    const order = {
      id: (id = button.getAttribute("data-order")),
      title: document.querySelector("#title").innerText,
      price: document.querySelector("#price").innerText,
      desc: document.querySelector("#desc").innerText
    };
    localStorage.setItem("order", JSON.stringify(order));


     const url = window.location.href.replace('fan-order', 'order');
     window.location.href = url

    });
});

