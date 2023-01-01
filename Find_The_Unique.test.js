import {findUniq} from "./Find_The_Unique"; 

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
  Test.assertEquals(findUniq([ 4, 4, 'foo', 4 ]), 'foo');
    });
  });
  