const SHOUTING = "SHOUTING";
const SILENCE = "SILENCE";
const QUESTION = "QUESTION";
const UNDEFINED = "UNDEFINED";

const onlyNumbers = str => str.match(/.*[0-9].*/) && !str.match(/[A-Z]/gi);

function parse(statement) {
  if (statement.trim() === "") {
    return SILENCE;
  } else if (!onlyNumbers(statement) && statement === statement.toUpperCase()) {
    return SHOUTING;
  } else if (statement.slice(-1) === "?") {
    return QUESTION;
  } else {
    return UNDEFINED;
  }
}

module.exports = function Bob() {
  return {
    hey: function hey(statement) {
      switch (parse(statement)) {
        case SILENCE:
          return "Fine. Be that way!";
        case SHOUTING:
          return "Whoa, chill out!";
        case QUESTION:
          return "Sure.";
        default:
          return "Whatever.";
      }
    }
  };
};
