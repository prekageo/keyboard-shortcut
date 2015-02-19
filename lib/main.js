var prefs = require("sdk/simple-prefs");
var tabs = require("sdk/tabs");
var { Hotkey } = require("sdk/hotkeys");

Hotkey({
  combo: prefs.prefs.combo,
  onPress: function() {
    if (prefs.prefs.newTab) {
      tabs.open(prefs.prefs.url);
    } else {
      tabs.activeTab.url = prefs.prefs.url;
    }
  }
});
