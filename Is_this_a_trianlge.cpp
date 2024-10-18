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




namespace Triangle

{

  bool isTriangle(int a, int b, int c)

  {

    // Check if any side is less than or equal to zero
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;

    }

    // Check the triangle inequality conditions
    return (a + b > c) && (a + c > b) && (b + c > a);

  }

};


/*

For Testing :


Describe(TriangleTests)
{
    It(Zero_ReturnsFalse)
    {
        Assert::That(Triangle::isTriangle(0,0,0),IsFalse());
        Assert::That(Triangle::isTriangle(0,1,2),IsFalse());

    }

    It(Negative_ReturnsFalse)
    {
        Assert::That(Triangle::isTriangle(-17,15,20),IsFalse());
        Assert::That(Triangle::isTriangle(-17,-15,20),IsFalse());
    }


    It(ValidTriangles_ReturnsTrue)
    {
        Assert::That(Triangle::isTriangle(15,17,20),IsTrue());
        Assert::That(Triangle::isTriangle(10,10,10),IsTrue());
        Assert::That(Triangle::isTriangle(10,5,10),IsTrue());

    }

    It(InvalidTriangles_ReturnsFalse)
    {
        Assert::That(Triangle::isTriangle(3,2,1),IsFalse());
        Assert::That(Triangle::isTriangle(10,10,20),IsFalse());
    }
};


*/