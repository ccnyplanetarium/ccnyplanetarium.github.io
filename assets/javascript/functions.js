// Adapted from http://hub.openspaceproject.com/


var setupHeader = () => {
  $(".header-container").hide();
  $("#show-connect").click(() => {
    $(".header-container").toggle();
  })
}

var openspace = null;

var connectToOpenSpace = () => {
  //setup the api params
  var host = document.getElementById('ipaddress').value;
  var api = window.openspaceApi(host, 4682);
  //notify users on disconnect
  api.onDisconnect(() => {
    $("input:button").removeClass("connected");
    $("input:button").addClass("disconnected");
    $('#show-connect').text('(not connected)')
    $("input:button").hide();
    $("table td:nth-child(7)").css("display", "none")
    $("table th:nth-child(7)").css("display", "none")
    openspace = null;
  });
  //notify users and map buttons when connected
  api.onConnect(async () => {
    try {
      openspace = await api.library();
      $('#show-connect').text('(connected)')
      $("input:button").removeClass("disconnected");
      $(".header-container").hide();
      checkVersion(api);
    } catch (e) {
      console.log('OpenSpace library could not be loaded: Error: \n', e)
      return;
    }
  })
  //connect
  api.connect();
};

var checkVersion = async (api) => {
  const versionTopic = api.startTopic('version', {});
  const { value } = await versionTopic.iterator().next();
  versionTopic.cancel();

  if ((value.openSpaceVersion.minor >= 16) && ((value.openSpaceVersion.patch >= 1))) {
      $("input:button").addClass("connected");
      $("input:button").html('');
  } else {
      $("input:button").addClass("oldversion");
      $(".import").append('<span class="tooltiptext">Import requires OpenSpace version 0.16.1 or greater</span>');

  }
  $("table td:nth-child(7)").css("display", "table-cell")
  $("table th:nth-child(7)").css("display", "table-cell")
}
