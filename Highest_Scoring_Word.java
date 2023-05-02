/*

6 kyu
Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points 
according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, 
return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

public class Highest_Scoring_Word {

    public static String high(String s) {

        String winner = "";
        int highScore = 0;

        for (String word : s.split(" ")) {
            int score = 0;
            for (char c : word.toCharArray()) {
                score += c - 'a' + 1;
            }
            if (score > highScore) {
                winner = word;
                highScore = score;
            }
        }

        return winner;
    }

}