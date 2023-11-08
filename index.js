const form = document.querySelector("#myform");
const display = document.querySelector(".display");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#number").value,
  };
  axios
    .post(
      "https://crudcrud.com/api/529ebb78f5bc42ab82a7121e7aa7ac03/usersData",
      obj
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  createDetails(obj.email, obj.name, obj.phone);
});
function createDetails(x, y, z) {
  const ele = document.createElement("li");
  ele.textContent = x + "-" + y + "-" + z;
  const edit = document.createElement("button");
  edit.textContent = "Edit";
  ele.append(edit);
  const del = document.createElement("button");
  del.textContent = "Delete";
  ele.append(del);
  display.append(ele);
  del.addEventListener("click", () => {
    ele.remove();
  });
  edit.addEventListener("click", () => {
    document.querySelector("#name").value = y;
    document.querySelector("#email").value = x;
    document.querySelector("#number").value = z;
    ele.remove();
  });
}

window.addEventListener("load", () => {
  axios
    .get("https://crudcrud.com/api/529ebb78f5bc42ab82a7121e7aa7ac03/usersData")
    .then((res) => {
      const data = res.data;
      data.forEach((val) => {
        createDetails(val.email, val.name, val.phone);
      });
    })
    .catch((err) => console.log(err));
});
