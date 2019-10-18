class Person extends Domer {
    name = '';
  
    constructor(name) {
      super();
      this.name = name;
    }
  
    // bind click-events with click="methodHandlingClick"
    onChangeName() {
      this.name = 'AWESOMENESS'
    }
  
    render(html) {
      return html`
        <section>
          <h3>This is ${this.name}</h3>
          <button click="onChangeName">Click ME</button>
        </section>
      `
    }
  }