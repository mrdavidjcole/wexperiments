Wistia.plugin("elpp", function(video, options) {
  console.log(theHashedIds);

  var embedLinks = [];
  for (var i = 0; i < theHashedIds.length; i++) {
    embedLinks.push(
      React.createElement("a", {href: "#wistia_ins4eub7j5?container=playlist"},
        React.createElement("div", {className: "embed_link"})
      )
    );
  }

  var HelloMessage = React.createClass({displayName: "HelloMessage",
    render: function() {
      return (
      React.createElement("div", {id: "embed_links_wrapper"},
        embedLinks
      )
      );
    }
  });

  React.render(
    React.createElement(HelloMessage, {name: "John"}),
    wistiaEmbeds[0].grid.below
  );

});
