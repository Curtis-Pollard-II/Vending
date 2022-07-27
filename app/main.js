import { LeavesController } from "./Controllers/LeavesController.js";

class App {
  // valuesController = new ValuesController();
  leavesController = new LeavesController()
}

window["app"] = new App();
