public class Main {

    public static void main(String[] args) {
        System.out.println(summation(8));
    }

    public static int summation(int n) {
        int total = 0;
        for (int i = 1; i <= n; i++) {
            total +=i;
        }
        return total;
    }
}
