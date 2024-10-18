"""

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

"""


is_triangle <- function(a, b, c){

 # Check if any side is less than or equal to zero
  if (a <= 0 || b <= 0 || c <= 0) {
    return(FALSE)

  }

  # Check the triangle inequality conditions
  return((a + b > c) && (a + c > b) && (b + c > a))

}




"""

For Testing :


test_that('Basic tests', {
  expect_equal(is_triangle(1, 2, 2), TRUE)
  expect_equal(is_triangle(7, 2, 2), FALSE)
  expect_equal(is_triangle(1, 2, 3), FALSE)
  expect_equal(is_triangle(1, 3, 2), FALSE)
  expect_equal(is_triangle(3, 1, 2), FALSE)
  expect_equal(is_triangle(5, 1, 2), FALSE)
  expect_equal(is_triangle(1, 2, 5), FALSE)
  expect_equal(is_triangle(2, 5, 1), FALSE)
  expect_equal(is_triangle(4, 2, 3), TRUE)
  expect_equal(is_triangle(5, 1, 5), TRUE)
  expect_equal(is_triangle(2, 2, 2), TRUE)
  expect_equal(is_triangle(-1, 2, 3), FALSE)
  expect_equal(is_triangle(1, -2, 3), FALSE)
  expect_equal(is_triangle(1, 2, -3), FALSE)
  expect_equal(is_triangle(0, 2, 3), FALSE)
})


"""