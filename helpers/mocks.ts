const generatePhotoLink = (name: string) => {
  const URL_TEMPLATE = "https://source.unsplash.com/random/200x200/";
  const letters = "ąćęłńóśźż";
  const replacement = "acelnoszz";
  let searchPhrase = name.toLowerCase().split(" ").join("+");
  for (let i = 0; i < letters.length; i++) {
    searchPhrase = searchPhrase.replaceAll(letters[i], replacement[i]);
  }
  return `${URL_TEMPLATE}?${searchPhrase}`;
};
