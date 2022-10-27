const wordSearch = (letters, word) => {

  if (letters.length <= 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));

  let verticalJoin = [];
  for (let i = 0; i < letters[0].length; i++) {
    verticalJoin.push([]);
    for (let j = 0; j < letters.length; j++) {
      verticalJoin[i].push(letters[j][i]);
    }
  }

  verticalJoin = verticalJoin.map(ls => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (j of verticalJoin) {
    if (j.includes(word)) return true;
  }

  return false;

};

module.exports = wordSearch

