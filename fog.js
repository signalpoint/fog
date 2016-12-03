// The fog theme constructor.
dg.themes.Fog = function() {
  this.regions = {
    top: {
      _before: '<div class="off-canvas-wrapper"><div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>',
      _attributes: {
        'class': 'title-bar'
      }
    },
    offLeft: {
      _attributes: {
        'class': 'off-canvas position-left',
        id: 'offCanvasLeft',
        'data-off-canvas': null
      }
    },
    offRight: {
      _attributes: {
        'class': 'off-canvas position-right',
        id: 'offCanvasRight',
        'data-off-canvas': null,
        'data-position' : 'right'
      }
    },
    content: {
      _attributes: {
        'class': 'off-canvas-content',
        'data-off-canvas-content': null
      },
      _after: '</div></div>'
    }
  };
};
// Extend the DrupalGap Theme prototype.
dg.themes.Fog.prototype = new dg.Theme;
dg.themes.Fog.prototype.constructor = dg.themes.Fog;
