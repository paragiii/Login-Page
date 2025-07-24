document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const apiUrl = "https://mocki.io/v1/28551aaf-a11f-4e29-86cc-e1f239c653b9"; 

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      alert("Login Successful!");
      console.log("Mock API response:", data);
    });
});
