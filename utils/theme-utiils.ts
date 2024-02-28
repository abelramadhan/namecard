function isValidTheme(inputValue: any): ThemeType | null {
  if (
    inputValue &&
    typeof inputValue === "object" &&
    "Front" in inputValue &&
    typeof inputValue.Front === "function" &&
    "Back" in inputValue &&
    typeof inputValue.Back === "function" &&
    "Backdrop" in inputValue &&
    typeof inputValue.Backdrop === "function"
  ) {
    return inputValue as ThemeType;
  } else {
    return null;
  }
}

export { isValidTheme };
