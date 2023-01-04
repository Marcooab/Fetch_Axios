// 1- Get with Fetch
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
  }).catch((error) => {
    console.log(error)
  })

// 2 - Get with Axios
axios.get("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })


  // 3 - Post with Fetch
  const data = {
    title: "Any title",
    content: "Any Content",
    userId: 1
  }

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    }).catch((error) => {
      console.log(error)
    })


// 4 - Post with Axios
axios.post("https://jsonplaceholder.typicode.com/posts", data)
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
  })
