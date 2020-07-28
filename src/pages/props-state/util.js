async function wait() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res();
    }, 1000);
  });
}

export async function getUserProfile() {
  await wait();
  return {
    id: "123",
    name: "vikash",
  };
}

export async function getuserAccount(userid) {
  await wait();
  return {
    email: "vikash.kumar",
    mobile: "8938838",
  };
}
