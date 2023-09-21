public class Kata {

    public static char findMissingLetter(char[] array) {
      for (int i=1; i<array.length; i++) {
        if (array[i]-array[i-1]!=1) return (char)(array[i]-1);
      }
      return '?';
    }
    
}