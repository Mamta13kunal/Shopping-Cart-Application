const currentUser=JSON.parse(localStorage.getItem("currentUser"))
document.getElementById("rzp-button1").onclick = function (e) {

    var options = {
     // Enter the Key ID generated from the Dashboard
      key: "rzp_test_PV1oQ0oMtgXOsq", 
// Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      amount: currentUser.totalPrice * 100, 
      currency: "INR",
      name: "MyShop Checkout",
//This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      description: "This is your order", 
      theme: {
        color: "#000",
      },
      image:
        "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    };
  
    var rzpy1 = new Razorpay(options);
    rzpy1.open();
    e.preventDefault();
  };