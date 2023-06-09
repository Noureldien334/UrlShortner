export const identifyPlatform = (os) => {
  switch (os) {
    case "android":
      return "android";
      break;
    case "darwin": //Ios
      return "ios";
      break;
    default:
      return "web";
  }
};
