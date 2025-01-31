class Control {
  constructor (callbacks) {
    this.callbacks = callbacks;
  }

  setKeyBindings () {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 37:
            this.callbacks.left();
            break;
          case 38:
            this.callbacks.up();
            break;
          case 39:
            this.callbacks.right();
            break;
          case 40:
            this.callbacks.down();
            break;
        }
      }
    });
  }
}


