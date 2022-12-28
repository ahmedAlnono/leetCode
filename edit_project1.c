#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int i , num , n , length = 0; 
char student[20][10];
char name[10];
int homeBack(){
    printf("\t\t\t1) back to home menue\n\t\t\t2) Exit\n");
    scanf("%i" , &i);
    switch(i){
        case 1: 
            home();
            break;
        case 2:
            return 1;
            default:
                printf("the number not valid");
                home();
            break;}}
int adminBack(){
    printf("\t\t\t1) back to admin menue\n\t\t\t2) back to home menue\n\t\t\t3) Exit\n");
    scanf("%i" , &i);
    switch(i){
        case 1:
            admin();break; // back to admin and break the switch
        case 2: 
            home();break; // back to home and break the switch
            case 3:
        return 1;
        default:
            admin(); // back to admin when the number is not valid
            break;  return 0;}} // the return is to finish the function i can dont put it
int admin(){
    system("clear"); // this code to clear console then the print is for admin choices
    printf("\t\t\t  logged as Admin \n\n\t\t\t  1) View All Student\n\t\t\t  2) Add Sudent\n\t\t\t  3) update studend\n\t\t\t  4) delete student\n\t\t\t  5) back to home\n\t\t\t  6) Exit\n");
    scanf("%i" , &i); // take choice from user
    switch(i){
        case 1:
            system("clear"); // this is to clear the console then print all student;
            for(n = 0; n < 20 ; n++){
                if(!strcmp(student[n], "")){
                    continue;}
                printf("\t\t\tNumber\t\tName\n");
                printf("\t\t\t%i\t\t%s\n\n" , (n+1), student[n]);
                printf("--------------------------------------------------\n");}
            adminBack();
    break;
    case 2:
        printf("\t\t type the student name "); // this to take the name of sutdent and add him automatic and give him number
        scanf("%s" , name);
        strcpy(student[length] , name);
        length++;
        admin();
        break;
    case 3:
        system("clear"); // take student number and naem and access to him and replace value with name
        printf("\n\t\ttype student number  ");
        scanf("%i" , &i);
        if(!strcmp(student[i-1] , "")){
            printf("\t\tNumber not valid\n");
            adminBack();}
        printf("\n\t\ttype new student name  ");
        scanf("%s" , name);
        strcpy(student[i-1] , name);
        admin();
        break;
    case 4:
        system("clear"); // delete the student that have the number that i take from user
        printf("\t\t\ntype number of student to delete");
        scanf("%i" , &i);
        strcpy(student[i-1] , "");
        admin();
        break;
    case 5:  home(); // back to home
    case 6: // exite from the program
    return;
    default: // back to admin
        admin();
        break;}}
int home(){
    system("clear");
    printf("\t\t\t log in as :\n\t\t\t1) Admin\n\t\t\t2) Student\n\t\t\t3) Exit\n");
    scanf("%i" , &i); // to know if user is admin or student
    switch(i){
        case 1:
            admin();// login as admin
            break;
        case 2:
            printf("\t\ttype your number  \n"); // login as student after ask him about number
            scanf("%i" , &i); // check if number correct or not
            if(!strcmp(student[i-1] , "")){
                home();}
            else{
                printf("\t\tHello %s\n you are fail in all exames\n" , student[i-1]);
                homeBack();}
            break;
            case 3: // exite from program
            return 1;
        default: // default is back to home
            home();
            break;}}
int main(){home();} // the main just have home function
    //   printf( "\033[%dm\033[2J\033[1;1f",40);