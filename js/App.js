//testar nytt
//redigerade med GitHub

class App extends Domer {
    inputText = '';
    johan = new Person('Johan');
    christian = new Person('Christian')
  
    // if we dont want to run any code at 
    // object creation, then we don't need
    // to have a constructor
  
    // render is a magical method, that works 
    // somewhat like toString() in an object
    render(html) {
  
      // we tag our templates with html
      // all components must have a single 
      // element surrounding all other elements
      return html`
        <section>
          <h1>Start page</h1>
  
           We connect our input elements to an 
           instance-variable with the attribute 'bind'
          <input bind="inputText" type="text">
  
           The DOM gets updated everytime these variables value changes
          <h2>${this.inputText}</h2>
  
           After creating a person objects in the class
           we can simply render these components the same way
           we add variables to strings with template literals
          ${this.johan}
          ${this.christian}
        </section>
      `
    }
  }
  
  // in App is the only time we create an instance
  // of the App globally, and this is to
  // start the app and render it and its components
  // to the DOM
  new App();
