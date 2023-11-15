// 여기에 1번 문제의 답을 작성하세요.
async function fetchData() {
  try {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// 여기에 2번 문제의 답을 작성하세요.
async function postData() {
  try {
    let response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "BMW Pencil",
      }),
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

postData();
