import getRandomInt from '../misc/getRandomInt';

export default class BackendService {
  COMMON_API_URL = 'https://swapi.dev/api/';
  PEOPLE_URL = `people/`;
  PLANETS_URL = 'planets/';
  STARSHIPS_URL = 'starships/';

  getImagePath(unit) {
    return `https://starwars-visualguide.com/assets/img${unit.url.substring(
      20,
      unit.url.length - 1
    )}.jpg`;
  }

  getRandomPlanet() {
    return this.getPlanet(getRandomInt(10) + 1);
  }

  async getPlanet(id) {
    const res = await this._getData(
      this.COMMON_API_URL + this.PLANETS_URL + id
    );

    return res;
  }

  getPeopleList = async () => {
    const res = await this._getData(this.COMMON_API_URL + this.PEOPLE_URL);

    return res.results;
  };

  getPlanetsList = async () => {
    const res = await this._getData(this.COMMON_API_URL + this.PLANETS_URL);

    return res.results;
  };

  async _getData(url) {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Can't fetch url ${url}. Error status: ${response.status}`
      );
    }

    return await response.json();
  }
}
