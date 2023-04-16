/*

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

public class Calculate_Average{
    public static double find_average(int[] array){

        double sum = 0;
        for (int val : array)
            sum += val;
        return sum / array.length;
    }    
}