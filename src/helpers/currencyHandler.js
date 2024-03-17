const iconHandler = (currency) => {
  if (currency === "eur") {
    return "€";
  } else if (currency === "jpy") {
    return "¥";
  } else {
    return "$";
  }
};

export { iconHandler };
