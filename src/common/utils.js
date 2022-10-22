export const checkType = (value) =>
  Object.prototype.toString.call(value).slice(8, -1);

export const mapArrToObj = (arr) => {
  const obj = {};
  arr.forEach((item, index) => {
    obj[index] = item;
  });
  return obj;
};

export const prepareData = (data) => {
  const type = checkType(data);
  if (type === 'Object') {
    Object.keys(data).forEach((key) => {
      const t = checkType(data[key]);
      if (t === 'Array') {
        data[key] = mapArrToObj(data[key]);
      } else if (t === 'Object') {
        prepareData(data[key]);
      }
    });
    return data;
  }
  if (type === 'Array') {
    return mapArrToObj(data.map((item) => prepareData(item)));
  }
  return data;
};
