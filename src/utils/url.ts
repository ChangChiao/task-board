interface QueryTaskParam {
  [key: string]: string | string[] | undefined;
}

export const genQueryStr = (obj: QueryTaskParam) => {
  const queryKeyArr = Object.keys(obj);
  if (queryKeyArr?.length === 0) return undefined;
  const isVaildArr = queryKeyArr.filter((item) => obj[item]);
  return isVaildArr.reduce((a, b) => {
    return typeof b === 'string' ? `${a}&${b}=${obj[b]}` : b;
  }, '');
};
