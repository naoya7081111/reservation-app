const Product = require("./model/product");

class FakeDb {
  constructor() {
    this.products = [
      {
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "サンプルテキスト",
        heading2: "サンプルテキスト",
        heading3: "サンプルテキスト",
        headingText1: "サンプルテキスト",
        headingText2: "サンプルテキスト",
        headingText3: "サンプルテキスト",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "サンプルテキスト",
        heading2: "サンプルテキスト",
        heading3: "サンプルテキスト",
        headingText1: "サンプルテキスト",
        headingText2: "サンプルテキスト",
        headingText3: "サンプルテキスト",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Standard",
        price: 299,
        description: "",
        heading1: "サンプルテキスト",
        heading2: "サンプルテキスト",
        heading3: "サンプルテキスト",
        headingText1: "サンプルテキスト",
        headingText2: "サンプルテキスト",
        headingText3: "サンプルテキスト",
        coverImage: "./assets/img/phone-cover.jpg",
      },
      {
        name: "Phone Special",
        price: 999,
        description: "",
        heading1: "サンプルテキスト",
        heading2: "サンプルテキスト",
        heading3: "サンプルテキスト",
        headingText1: "サンプルテキスト",
        headingText2: "サンプルテキスト",
        headingText3: "サンプルテキスト",
        coverImage: "./assets/img/phone-cover.jpg",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seeDb() {
    this.pushProductToDb();
  }
}
module.exports = FakeDb;
