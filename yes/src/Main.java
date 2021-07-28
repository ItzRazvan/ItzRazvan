import java.util.Scanner;

public class Main {
    private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args){
        System.out.println(Ceva());
    }

    public static boolean Ceva(){
        System.out.println("Enter a word. If its an palindrome(word, that typed backwards, its the same) it will " +
                "return true, if not, false");
        String word = scanner.nextLine();

        char[] a = new char[word.length()];
        char[] b = new char[word.length()];
        for(int i = 0; i < word.length(); i++){
            a[i] = word.charAt(i);
        }
        for(int i = 0; i < word.length(); i++){
            b[i] = a[word.length() - 1 - i];
        }
        for(int i = 0; i < word.length(); i++){
            if (b[i] != word.charAt(i)){
                return false;
            }
        }
        return true;

    }
}
