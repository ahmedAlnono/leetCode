#include <stdio.h>
#include <math.h>
int main(){
    int num , res=0, final =0;
    printf("type the number\t");
    scanf("%d" , &num);
    //     int i , j;
    //     for(i = 0, j = 1 ; i < num; i++ , j*=10){
    //         res += j;
    //         printf("%d\t" , j);
    //         printf("%i \n" ,res);
    //         final +=res;
    //         printf("final is %i\n" , final);
    //     };
    for (int i  = 1 ; i <= num ; i++)
        printf("%i" ,i);
        
    printf("\n");

}