/*

6 kyu

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

*/

public class Write_Number_In_Expanded_Form
{
    public static String expandedForm(int num)
    {
      
      String outs = "";
      
      for (int i = 10; i < num; i *= 10) {
        
        int rem = num % i;
        outs = (rem > 0) ? " + " + rem + outs : outs;
        num -= rem;
    
      }
      
        outs = num + outs;

        return outs;
    }
}