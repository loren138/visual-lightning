# Visual Regression Testing Lightning Talk

This repository is the code sample to go with my lightning talk on Visual Regression testing.

The talk and slides are available at: **_ADD URL HERE_**

I am working on a longer version of the talk.  It will contain a complete sample project
rather than just test files.  If you'd like updates, please follow this repository.

## Running Tests
1. You will need JDK installed for selenium to work (`brew cask install java`)
2. Run `npm install`
3. Run `npm run selenium` (Leave this running while running tests)
4. Run `npm run test`
5. Kill the selenium process

## To Do:

1. Add `es-lint` to the repository
2. Create an `es-lint` rule that `prepareBaseImage` must be false to prevent merges 
   that would create false positives.
3. Make it possible for tests and true images to live in sub-folders together.