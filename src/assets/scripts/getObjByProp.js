const getObjByProp = (array, param, propRef) => {
  let item = array.filter(item => {
    return item[propRef] == param;
  })[0];
  return item;
};

export default getObjByProp;
