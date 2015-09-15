Wistia.plugin("elpp", function(video, options) {
  console.log(theHashedIds);

  var embedLinks = [];
  for (var i = 0; i < theHashedIds.length; i++) {
    embedLinks.push(
      React.createElement("a", {href: "#wistia_" + theHashedIds[i] + "?container=playlist"},
        React.createElement("div", {className: "embed_link"})
      )
    );
  }

  var PlaylistControls = React.createClass({displayName: "PlaylistControls",
    render: function() {
      return (
      React.createElement("div", {id: "embed_links_wrapper"},
        React.createElement("div", {id: "embed_links"}, 
          embedLinks
        )
      )
      );
    }
  });

  React.render(
    React.createElement(PlaylistControls, {ids: theHashedIds}),
    wistiaEmbeds[0].grid.below
  );

});
