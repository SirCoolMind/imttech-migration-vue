import MigrationTool from "./components/MigrationTool.vue";

export default {
  install(Vue, options = {}) {
    // Register the component globally
    Vue.component("MigrationTool", MigrationTool);

    // Add route if `router` is provided
    if (options.router) {
      options.router.addRoutes([
        {
          path: "/migration-tool",
          component: MigrationTool,
        },
      ]);
    }
  },
};