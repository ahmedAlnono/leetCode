class rotateImage{
    public static void main(String[] args) {
        int[][] matrix = {{1, 2, 3},
                          {4, 5, 6},
                          {7, 8, 9}};
      
        System.out.println("Original Matrix:");
        printMatrix(matrix);
      
        transposeInPlace(matrix);
      
        System.out.println("\nTransposed Matrix:");
        printMatrix(matrix);
      }
      public static void transposeInPlace(int[][] matrix) {
        int n = matrix.length;
      
        for(int i=0; i<n; i++){
            for(int j=i; j<n; j++){
                int temp;
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
       }
        for(int i=0; i<n; i++){
            for(int j=0; j<n/2; j++){
                int temp =0;
                 temp = matrix[i][j];
                matrix[i][j] = matrix[i][n-1-j];
                matrix[i][n-1-j] = temp;
            }}
        }
      
      public static void printMatrix(int[][] matrix) {
        int rows = matrix.length;
        int columns = matrix[0].length;
      
        for (int i = 0; i < rows; i++) {
          for (int j = 0; j < columns; j++) {
            System.out.print(matrix[j][i] + " ");
          }
          System.out.println();
        }
      }

}