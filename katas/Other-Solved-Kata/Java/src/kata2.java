public class kata2 {
  public static int  findEvenIndex(int[] arr) {
    int mid = ((arr.length) / 2) , leftSum = 0, rightSum = 0;
    for (int i = 0; i < mid; i++) {
        leftSum += i;
    }
    for (int i = arr.length -1; i >= mid; i--) {
      rightSum+= i;
    }
    if (rightSum == leftSum) {
      return  -1;
    }
    System.out.println(mid);
    return  1;
  }


  public static void main(String[] args) {
    int arr[] = {1,2,3,4,3,2,1};
    findEvenIndex(arr);
  }
}