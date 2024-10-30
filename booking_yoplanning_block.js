/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
  
wp.blocks.registerBlockType('brad/border-box', {
    title: 'Moteur de réservation Yoplanning',
    icon: 'embed-generic',
    category: 'widgets',
    attributes: {
      content: {type: 'string'},
      color: {type: 'string'}
    },
    
/* This configures how the content and color fields will work, and sets up the necessary elements */
    
edit: function(props) {
    function updateContent(event) {
        props.setAttributes({content: event.target.value})
    }
    return React.createElement(
    "div",
    null,
    React.createElement(
        "h3",
        { style: { fontWeight: "bold" }},
        "Entrée le numéro de votre widget"
    ),
    React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent })
    );
},
save: function(props) {
    srcValue = "https://widget.vakario.com/id/"+props.attributes.content+".js";
    return React.createElement(
        "div",
        { style: { margin: "0 auto", width:"auto" }},
        React.createElement(
            "script",
            { src: srcValue },
            null
        )
        );
}
})
