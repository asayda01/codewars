/*

8 kyu
Reversed Strings

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'



*/

public class Reversed_Strings {

    public static String solution(String str) {

        String result = new StringBuffer(str).reverse().toString();
        return result;

    };
  
}