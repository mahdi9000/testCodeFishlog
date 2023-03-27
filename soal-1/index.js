const numArray = Array.from(Array(50).keys());

const result = numArray
  .map((num) => {
    const n = num + 1;
    if (n % 15 === 0) {
      return "FrontendBackend";
    } else if (n % 3 === 0) {
      return "Frontend";
    } else if (n % 5 === 0) {
      return "Backend";
    }
    return n;
  })
  .join(",");

console.log(result);
