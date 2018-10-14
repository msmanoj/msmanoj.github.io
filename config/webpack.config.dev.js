import path from "path";

module.exports = {
  alias: {
    components: path.resolve("src/components"),
    actions: path.resolve("src/actions"),
    services: path.resolve("src/services"),
    helpers: path.resolve("src/helpers"),
    "react-native": "react-native-web"
  }
};
