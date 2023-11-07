
const queryString = {
  appId: process.env.REACT_APP_APP_ID,
  appKey: process.env.REACT_APP_APPLICATION_KEYS 
};

 const fetchData = async (defaultQuery) => {
  const { appId, appKey } = queryString;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuery}&app_id=${appId}&app_key=${appKey}
      `
    );

    const response = await data.json();
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

const fetchTabData = async (defaultQuery) => {
  const { appId, appKey } = queryString;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${defaultQuery}?type=public&app_id=${appId}&app_key=${appKey}`);

    const response = await data.json();
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
export  {fetchData,fetchTabData};