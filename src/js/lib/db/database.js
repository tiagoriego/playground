export const DATABASE_RESOURCE = {
  CLIENT: "clientes",
};

export class Database {
  save(resource, obj) {
    let listObj = this.getAll(resource);
    if (listObj instanceof Array) {
      listObj.push(obj);
    } else {
      listObj = [];
      listObj.push(obj);
    }
    localStorage.setItem(resource, JSON.stringify(listObj));
  }

  getAll(resource) {
    try {
      return JSON.parse(localStorage.getItem(resource));
    } catch (e) {
      throw e;
    }
  }

  static getInstance() {
    return new Database();
  }
}
