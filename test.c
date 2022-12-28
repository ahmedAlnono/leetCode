#include <stdio.h>
#include <stdlib.h>
#include <string.h>
    int home(){printf("\t\t\t log in as :\n\t\t\t1) Admin\n\t\t\t2) Student\n\t\t\t3) Exit\n");}
    int admin(){printf("\t\t\t  logged as Admin \n\n\t\t\t  1) View All Student\n\t\t\t  2) Add Sudent\n\t\t\t  3) update studend\n\t\t\t  4) delete student\n\t\t\t  5) back to home\n\t\t\t  6) Exit\n");}
    int adminBack(){printf("\t\t\t1) back to admin menue\n\t\t\t2) back to home menue\n\t\t\t3) Exit\n");}
    int homeBack(){printf("\t\t\t1) back to home menue\n\t\t\t2) Exit\n");}

int main (){
    int length = 0, i =0 , n =0 , j =0;
    char name[15];
    char students[4][10] = {"ahmed" , "ali" , "" , ""};
    while(1){
        if(i == 0){
            j = 0;
            home();
            scanf("%i" , &j);
            i = j;
        }
        if(i == 1){
            system("clear");
            admin();
            scanf("%i" , &n);
            switch(n){
                case 1:
                    for(int t = 0 ; t < 4 ; t++){
                        if(strcmp(students[0] , "") == 0){
                            printf("empty\n");
                            continue;
                        }
                        printf("%s\n" , students[t]);
                    }
                    scanf("%s" , name);
                    adminBack();
                    break;
                case 2:
            }
        }
    }
}
    // strcpy(students[0], "ibrahem");
    // strcpy(students[1], "mahmoud");
    // printf("%s\n" , students[0]);
    // printf("%s\n" , students[1]);