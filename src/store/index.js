import { init } from "@rematch/core";
import home from "./modules/home";
const store = init({
  models: {
    home,
  }
});
export default store;
