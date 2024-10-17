/*

7 kyu
Is this a triangle?

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

Examples:

Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false

*/



class TriangleTester{
  public static boolean isTriangle(int a, int b, int c){

   // Check if any side is less than or equal to zero
        if (a <= 0 || b <= 0 || c <= 0) {
            return false;

        }

        // Check the triangle inequality
        return (a + b > c) && (a + c > b) && (b + c > a);
  }
}









/*

For Testing :


import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.*;

public class TriangleTesterTest {
    private static void doTest(boolean expected, int a, int b, int c) {
        boolean actual = TriangleTester.isTriangle(a, b, c);
        String message = String.format("a = %d, b = %d, c = %d", a, b, c);
        assertEquals(expected, actual, message);
    }

    @Test
    public void sampleTests() {
        doTest(true,  1,2,2);
        doTest(false, 7,2,2);
        doTest(true, 2,2,2);
    }
}



*/