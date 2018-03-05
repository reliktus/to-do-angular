class TestClas {
  msg: 'Hello';
  // msgVar: 'ds';

  displayMsg() {
    console.log(this.msg);
  }
}
let example = new TestClas();
example.displayMsg();
