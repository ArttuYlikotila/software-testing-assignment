![Build status](https://travis-ci.com/ArttuYlikotila/software-testing-assignment.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ArttuYlikotila/software-testing-assignment/badge.svg?branch=master)](https://coveralls.io/github/ArttuYlikotila/software-testing-assignment?branch=master)
# Group work for Tampere University course COMP.SE.200

This is a group work done in Software Testing course at Tampere University.

The purpose of the group work is to test a JavaScript utility library given by the course staff.

Only about half of the library is actually tested. This is because a use case connected to this work
did not require all of the library to be tested.

The tests are done with Mocha and asserted with Chai. Coverage reporting tool in use is c8.

This repository is connected to Travis CI that will build this project and run the test suite with every
update to this repository. Code coverage of the tests is reported by Coveralls, which gets the data from Travis CI.

## Source code
The folder /src contains the source code that is under testing. There is also a folder /src/.internal, which is 
excluded from testing.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.

Individuals who remove or modify the license file will also carry the consequences.
