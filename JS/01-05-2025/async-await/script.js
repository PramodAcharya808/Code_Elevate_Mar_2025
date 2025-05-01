// async
// await

function returnData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Returned data");
    }, 2000);
  });
}

async function fetchData() {
  const result = await returnData();
  console.log(result);
  console.log("Run 1");
}

console.log("Run 2");

fetchData();
