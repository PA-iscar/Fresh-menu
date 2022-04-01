function loadLocalData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (err) {
    return undefined;
  }
}

function saveLocalData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

saveLocalData("cart",0);
saveLocalData("meals",[]);
// saveLocalData("total",0);

export { loadLocalData, saveLocalData };
