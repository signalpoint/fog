# fog

A simple DrupalGap 8 Theme with Foundation 6 Sites and two Off Canvas Panels.

## Regions

 - top
 - offLeft
 - offRight
 - content

## example settings.js config

```
dg.settings.blocks[dg.config('theme').name] = {
  top: {
    example_top_left: {}, // The left menu button
    example_top_right: {} // The right menu button
  },
  offLeft: {
    example_canvas_left: {}, // The left slide menu content
    main_menu: {} // DrupalGap's main menu
  },
  offRight: {
    example_canvas_right: {}, // The right slide menu content
    user_menu: {} // DrupalGap's user menu
  },
  content: {

    // The user login form provided by DrupalGap.
    user_login: {
      _roles: [
        { target_id: 'anonymous', visible: true }
      ]
    },

    // DrupalGap's page title block.
    title: { },

    // DrupalGap's "main" content block.
    main: { }

  }
};
```

## example blocks

To power the Foundation off canvas menus, we need 4 blocks in a custom DrupalGap 8 module:

```
cw_go.blocks = function() {
  var blocks = {};

  blocks['example_top_left'] = {
    build: function() {
      return new Promise(function(ok, err) {
        var content = {};
        content.menu = {
          _markup:
            '<div class="title-bar-left">' +
              '<button class="menu-icon" type="button" data-open="offCanvasLeft"></button>' +
              '<span class="title-bar-title">My App</span>' +
            '</div>'
        };
        ok(content);
      });
    }
  };

  blocks['example_top_right'] = {
    build: function() {
      return new Promise(function(ok, err) {
        var content = {};
        content.menu = {
          _markup:
            '<div class="title-bar-right">' +
              '<button class="menu-icon" type="button" data-open="offCanvasRight"></button>' +
            '</div>'
        };
        ok(content);
      });
    }
  };

  blocks['example_canvas_left'] = {
    build: function() {
      return new Promise(function(ok, err) {
        var content = {};
        content.menu = {
          _markup:
              '<button class="close-button" aria-label="Close menu" type="button" data-close>' +
                '<span aria-hidden="true">&times;</span>' +
              '</button>' +

              '<ul class="vertical menu">' +
                '<li><a href="#">Foo</a></li>' +
              '</ul>'
        };
        ok(content);
      });
    }
  };

  blocks['example_canvas_right'] = {
    build: function() {
      return new Promise(function(ok, err) {
        var content = {};
        content.menu = {
          _markup:
            '<button class="close-button" aria-label="Close menu" type="button" data-close>' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +

            '<ul class="vertical menu">' +
              '<li><a href="#">Bar</a></li>' +
            '</ul>'
        };
        ok(content);
      });
    }
  };

  return blocks;
};
```

## init Foundation

In your route `_controller`, be sure to initialize Foundation's JavaScript so the menus render properly:

```
setTimeout(function(){
  $(document).foundation();
}, 1);
```

