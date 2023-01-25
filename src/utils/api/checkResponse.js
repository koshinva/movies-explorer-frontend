export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((errData) => {
    return Promise.reject({
      message: errData.message || 'Что-то пошло не так...',
      errorStatus: res.status,
      statusText: res.statusText,
    });
  });
};
