var prefs = require("sdk/simple-prefs");
var tabs = require("sdk/tabs");
var { Cc, Ci } = require('chrome');
var { Hotkey } = require("sdk/hotkeys");

Hotkey({
  combo: prefs.prefs.combo,
  onPress: function() {
    /* Remove focus until this bug is resolved:
     * javascript focus method does not work if focus is in chrome (address bar)
     * and the user presses F5/CTRL-R (https://bugzilla.mozilla.org/show_bug.cgi?id=1134632)
     */
    var focusMgr = Cc['@mozilla.org/focus-manager;1'].getService(Ci.nsIFocusManager);
    focusMgr.moveFocus(focusMgr.activeWindow, null, focusMgr.MOVEFOCUS_ROOT, 0);
    if (prefs.prefs.newTab) {
      tabs.open(prefs.prefs.url);
    } else {
      tabs.activeTab.url = prefs.prefs.url;
    }
  }
});
