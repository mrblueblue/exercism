const charCodeSum = word =>
  word.split("").reduce(
    (accum = 0, letter) => {
			return accum + letter.charCodeAt(0)
		}, 0
  );

module.exports = function Anagram(baseWord) {
  const baseWordFormatted = baseWord.toLowerCase();
  return {
    matches: function matches(...args) {
      const words = Array.isArray(args[0]) ? [...args[0]] : args;
      return words.filter(word => {
        const wordFormatted = word.toLowerCase();
        return (
          wordFormatted !== baseWordFormatted &&
          charCodeSum(baseWordFormatted) === charCodeSum(wordFormatted)
        );
      });
    }
  };
};
