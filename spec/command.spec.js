const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
 

  test("constructor sets command type", function() {
    let command=new Command("hello");
    expect(command.commandType).toEqual("hello");
});
test("constructor sets value", function() {
  let command=new Command("hello", "world");
  expect(command.value).toEqual("world");
});

});