function getImagePath(unit) {
  return `https://starwars-visualguide.com/assets/img${unit.url.substring(
    20,
    unit.url.length - 1
  )}.jpg`;
}

export default getImagePath;
