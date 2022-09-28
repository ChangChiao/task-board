export const getAuthorizationImgHeader = () => {
  // const token = localStorage.getItem('token');
  return {
    'Content-Type': 'multipart/form-data',
    // authorization: `Bearer ${token}`,
  };
};

export const getAuthorizationHeader = () => {
  // const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    // authorization: `Bearer ${token}`,
  };
};
