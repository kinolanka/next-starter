export const parseJson = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null;
  }
};

export default parseJson;
