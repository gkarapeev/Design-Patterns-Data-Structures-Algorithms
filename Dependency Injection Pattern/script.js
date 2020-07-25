// What's the difference between DI and regular function parameters?
// Is the difference just in the way we use it? (in this example, using the config file)

class PersonManager {
  constructor(person, saverService) {
    this.Person = person;
    this.saverService = saverService;
  }
  SavePerson() {
    if (this.saverService) {
      this.saverService.SavePerson(this.Person);
    } else {
      console.log("No saver service was registered.");
    }
  }
}

//Services
class txtSaverService {
  SavePerson(person) {
    console.log(`Person.TXT | ${person.firstName + " " + person.lastName}`);
  }
}
class xmlSaverService {
  SavePerson(person) {
    console.log(`Person.XML | ${person.firstName + " " + person.lastName}`);
  }
}
class sqlSaverService {
  SavePerson(person) {
    console.log(`Person.SQL | ${person.firstName + " " + person.lastName}`);
  }
}

const services = {
  txt: txtSaverService,
  xml: xmlSaverService,
  sql: sqlSaverService
};

async function savePerson() {
  var saverServiceTypeString = await GetServiceType(); // "txt", "xml", "sql"
  var serviceType = new services[saverServiceTypeString]();
  var john = new Person("John", "Doe");
  // var service = new txtSaverService(); // <-- hardcoded
  if (serviceType) {
    var client = new PersonManager(john, serviceType);
    client.SavePerson();
  }
}

async function GetServiceType() {
  var saverServiceTypeString;
  var response = await fetch("config.json");
  var saverServiceTypeObj = await response.json();
  saverServiceTypeString = saverServiceTypeObj.Type;
  return saverServiceTypeString;
}

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
  }
}
