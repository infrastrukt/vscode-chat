//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//
import * as assert from "assert";
import * as vscode from "vscode";
import * as myExtension from "../extension";

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", function() {
  // Defines a Mocha unit test
  test("Something 1", function() {
    assert.equal(-1, [1, 2, 3].indexOf(5));
    assert.equal(-1, [1, 2, 3].indexOf(0));
  });

  test("Open slack", function() {});
});
