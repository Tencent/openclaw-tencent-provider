// Tencent setup entrypoint exposes lightweight config repair hooks.
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { migrateTencentTokenHubModelDefaults } from "./config-compat.js";

export default definePluginEntry({
  id: "tencent",
  name: "Tencent Provider Setup",
  description: "Lightweight Tencent provider setup hooks",
  register(api) {
    api.registerConfigMigration((config) => migrateTencentTokenHubModelDefaults(config));
  },
});
