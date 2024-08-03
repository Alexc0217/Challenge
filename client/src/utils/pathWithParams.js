export const pathWithParams = (url, params) => {
  let replacedUrl = url;
  
  Object.keys(params).forEach(key => {
    const value = params[key];
    replacedUrl = replacedUrl.replace(`:${key}`, value);
  });

  return replacedUrl;
};
