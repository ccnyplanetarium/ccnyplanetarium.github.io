var TimeButtons = {
  title: "Time Controls",
  buttons: {
    'Toggle Pause (Interpolated)': () => {
      openspace.time.interpolateTogglePause();
    },
    'Toggle Pause (Immediate)': async () => {
      openspace.time.togglePause();
    },
    'Realtime': () => {
      openspace.time.interpolateDeltaTime(1)
    },
    '5 sec/sec': () => {
      openspace.time.interpolateDeltaTime(5)
    },
    '30 sec/sec': () => {
      openspace.time.interpolateDeltaTime(30)
    },
    '1 min/sec': () => {
      openspace.time.interpolateDeltaTime(60)
    },
    '10 min/sec': () => {
      openspace.time.interpolateDeltaTime(600)
    },
    '1 hr/sec': () => {
      openspace.time.interpolateDeltaTime(3600)
    },
    '4 hr/sec': () => {
      openspace.time.interpolateDeltaTime(14400)
    },
    '12 hr/sec': () => {
      openspace.time.interpolateDeltaTime(43200)
    },
    '1 day/sec': () => {
      openspace.time.interpolateDeltaTime(86400)
    },
    '7 day/sec': () => {
      openspace.time.interpolateDeltaTime(604800)
    },
    '1 mo/sec': () => {
      openspace.time.interpolateDeltaTime(2592000)
    },
    '1 yr/sec': () => {
      openspace.time.interpolateDeltaTime(31536000)
    },
  }
};

var VisualButtons = {
  title: "Visual",
  buttons: {
    'Hide All Trails': async () => {
        const duration = 1;
        openspace.setPropertyValue("Scene.*Trail.Renderable.Opacity", 0, 1)
        setTimeout(() => {
          openspace.setPropertyValue("Scene.*Trail.Renderable.Enabled", false)
        }, duration * 1000)
    },
    'Show All Trails': async () => {
        const duration = 1;
        openspace.setPropertyValue("Scene.*Trail.Renderable.Enabled", true)
        openspace.setPropertyValue("Scene.*Trail.Renderable.Opacity", 1, 1)
    },
    'Fade screen to/from black': async () => {
      var blackoutFactor = await openspace.getPropertyValue('RenderEngine.BlackoutFactor');
      if (blackoutFactor[1] > 0.5) {
        openspace.setPropertyValueSingle('RenderEngine.BlackoutFactor', 0.0, 3)
      } else {
        openspace.setPropertyValueSingle('RenderEngine.BlackoutFactor', 1.0, 3)
      }
    },
  }
};

var FrictionButtons = {
  title: "Camera Friction",
  buttons: {
    'Toggle Rotation friction': async () => {
      var isEnabled = await openspace.getPropertyValue('NavigationHandler.OrbitalNavigator.Friction.RotationalFriction');
      openspace.setPropertyValueSingle('NavigationHandler.OrbitalNavigator.Friction.RotationalFriction', !isEnabled[1]);
    },
    'Toggle Zoom friction': async () => {
      var isEnabled = await openspace.getPropertyValue('NavigationHandler.OrbitalNavigator.Friction.ZoomFriction');
      openspace.setPropertyValueSingle('NavigationHandler.OrbitalNavigator.Friction.ZoomFriction', !isEnabled[1]);
    },
    'Toggle Roll friction': async () => {
      var isEnabled = await openspace.getPropertyValue('NavigationHandler.OrbitalNavigator.Friction.RollFriction');
      openspace.setPropertyValueSingle('NavigationHandler.OrbitalNavigator.Friction.RollFriction', !isEnabled[1]);
    },
  }
};

var SystemButtons = {
  title: "System",
  buttons: {
    'Toggle Dashboard': async () => {
      var isEnabled = await openspace.getPropertyValue('Dashboard.IsEnabled');
      openspace.setPropertyValueSingle('Dashboard.IsEnabled', !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowLog", !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowVersion", !isEnabled[1]);
      openspace.setPropertyValueSingle("RenderEngine.ShowCamera", !isEnabled[1]);
    },
    'Toggle Native GUI': async () => {
      var isEnabled = await openspace.getPropertyValue('Modules.ImGUI.Main.Enabled');
      openspace.setPropertyValueSingle('Modules.ImGUI.Main.Enabled', !isEnabled[1]);
    },
    'Toggle Main GUI': async () => {
      var isEnabled = await openspace.getPropertyValue('Modules.CefWebGui.Visible');
      openspace.setPropertyValueSingle('Modules.CefWebGui.Visible', !isEnabled[1]);
    },
    'Take Screenshot': () => {
      openspace.setPropertyValueSingle('RenderEngine.TakeScreenshot', null)
    },
    '---': () => {
    },
    '!!!---> Toggle Shutdown <---!!!': () => {
      openspace.toggleShutdown();
    },
  }
};
var defaultButtonGroups = [TimeButtons, VisualButtons, FrictionButtons, SystemButtons];
