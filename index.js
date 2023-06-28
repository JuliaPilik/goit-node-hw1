const yargs = require("yargs");
const contacts = require("./contacts.js");
const argv = require("yargs").argv;
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
