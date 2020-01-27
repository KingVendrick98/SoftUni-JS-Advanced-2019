class Library {
    constructor(libraryName) {
      this.libraryName = libraryName;
      this.subscribers = [];
      this.subscriptionTypes = {
        normal: +this.libraryName.length,
        special: +this.libraryName.length * 2,
        vip: Number.MAX_SAFE_INTEGER
      };
    }
  
    subscribe(name, type) {
      if (!this.subscriptionTypes.hasOwnProperty(type)) {
        throw new Error(`The type ${type} is invalid`);
      }
  
      let subscriber = this.subscribers.find(s => s.name === name);
  
      if (subscriber) {
        subscriber.type = type;
      } else {
        subscriber = {
          name: name,
          type: type,
          books: []
        };
  
        this.subscribers.push(subscriber);
      }
  
      return subscriber;
    }
    unsubscribe(name) {
      let indexOfSubscriber = this.subscribers
      .indexOf(this.subscribers.filter(x => x.name === name)[0]
      );
      if (indexOfSubscriber < 0) {
        throw new Error(`There is no such subscriber as ${name}`);
      }
  
      this.subscribers.splice(indexOfSubscriber, 1);
      return this.subscribers;
    }
    receiveBook(subscriberName, bookTitle, bookAuthor) {
      let subscriber = this.subscribers.find(s => s.name === subscriberName);
  
      if (!subscriber) {
        throw new Error(`There is no such subscriber as ${subscriberName}`);
      }
  
      let limit = this.subscriptionTypes[subscriber.type];
  
      if (limit === subscriber.books.length) {
        throw new Error(`You have reached your subscription limit ${limit}!`);
      }
  
      let book = {
        title: bookTitle,
        author: bookAuthor
      };
  
      subscriber.books.push(book);
  
      return subscriber;
    }
    showInfo() {
      if (this.subscribers.length === 0) {
        return `${this.libraryName} has no information about any subscribers`;
      }
  
      let result = "";
  
      for (const subscriber of this.subscribers) {
        result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\n`;
  
        let subscriberBooks = [];
        for (const book of subscriber.books) {
          subscriberBooks.push(`${book.title} by ${book.author}`);
        }
  
        result += `Received books: ${subscriberBooks.join(", ")}\n`;
      }
  
      result.trim();
  
      return result;
    }
  }

  let lib = new Library("Lib");

lib.subscribe("Peter", "normal");
lib.subscribe("John", "special");

lib.receiveBook("John", "A Song of Ice and Fire", "George R. R. Martin");
lib.receiveBook("Peter", "Lord of the rings", "J. R. R. Tolkien");
lib.receiveBook("John", "Harry Potter", "J. K. Rowling");

console.log(lib.showInfo());