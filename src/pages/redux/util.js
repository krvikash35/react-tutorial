async function wait() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res();
    }, 1000);
  });
}

export async function fetchBrands() {
  await wait();
  return [
    { id: 1, name: "brand1" },
    { id: 2, name: "brand2" },
  ];
}

export async function fetchBrandsError() {
  await wait();
  throw new Error("error while fetch brands");
}

export async function fetchAgencies() {
  await wait();
  return [
    { id: 1, name: "agencies1" },
    { id: 2, name: "agencies2" },
  ];
}
