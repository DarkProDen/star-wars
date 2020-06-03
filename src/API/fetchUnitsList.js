const fetchResult = require('./fetchResult');

function fetchUnitsList(url) {
  const unitsArray = [];

  async function concatUnitsArray(result) {
    unitsArray.push(...result.results);

    if (result.next) {
      return await fetchUnitsPage(result.next);
    }

    return unitsArray;
  }

  async function fetchUnitsPage(url) {
    const result = await fetchResult(url);
    return await concatUnitsArray(result);
  }

  return fetchUnitsPage(url);
}

export default fetchUnitsList;
