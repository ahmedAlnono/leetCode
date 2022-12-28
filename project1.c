#include <stdio.h>
int i , num;
    char* student[20][2] = {
    {"1" , "ahmed"},{"2" , ""},{"3" , ""},{"4" , ""},{"5" , ""},{"6" , ""},
    {"7" , ""},{"8" , ""},{"9" , ""},{"10" , ""},{"11" , ""},{"12" , ""},
    {"13" , ""},{"14" , ""},{"15" , ""},{"16" , ""},{"17" , ""},
    {"18" , ""},{"19" , ""},{"20" , ""}
};
    char name[10];
int homeBack(){
    printf("\t\t\t1) back to home menue\n");
    printf("\t\t\t2) Exit\n");
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
            break;
    }
}
int adminBack(){
    printf("\t\t\t1) back to admin menue\n");
    printf("\t\t\t2) back to home menue\n");
    printf("\t\t\t3) Exit\n");
    scanf("%i" , &i);
    switch(i){
        case 1:
        admin();
        break;
        case 2: 
        home();
        break;
        case 3:
        return 1;
        default: 
            printf("the nuber not valid");
            admin();
            break;
    }
}

int admin(){
    printf("\e[1;1H\e[2J");
    printf("\e[1;1H\e[2J");
    printf("\t\t\t  logged as Admin \n\n");
    printf("\t\t\t  1) View All Student\n");
    printf("\t\t\t  2) Add Sudent\n");
    printf("\t\t\t  3) update studend\n");
    printf("\t\t\t  4) delete student\n");
    printf("\t\t\t  5) back to home\n");
    printf("\t\t\t  6) Exit\n");
    scanf("%i" , &i);
    switch(i){
        case 1:
            printf("\e[1;1H\e[2J");
            printf("\e[1;1H\e[2J");
            for(int n = 0; n < 20 ; n++){
                if(student[n][1] == ""){
                    break;
                }
                printf("\t\t\tNumber\t\tName\n");
                printf("\t\t\t%s\t\t%s\n\n" , student[n][0] , student[n][1]);
                printf("--------------------------------------------------\n");
                if(n == 19){
                    printf("############################################################");
                }
            }
            adminBack();

    break;
    case 2:
        printf("\t\t type the student name ");
        scanf("%s" , name);
        for(int r = 0 ; r < 20 ; r++){
            if(student[r][1] == ""){
                student[r][1] = name;
                break;
            }
        }
        admin();
        break;
    case 3:
        printf("\e[1;1H\e[2J");
        printf("\e[1;1H\e[2J");
        printf("\n\t\ttype student number  ");
        scanf("%i" , &i);
        if(student[i-1][1] == ""){
            printf("\t\tNumber not valid");
            scanf("");
            adminBack();
        }
        printf("\n\t\ttype new student name  ");
        scanf("%s" , name);
        student[i-1][1] = name;
        admin();
        break;
    case 4:
        printf("\e[1;1H\e[2J");
        printf("\e[1;1H\e[2J");
        printf("\t\t\ntype number of student to delete");
        scanf("%i" , &i);
        student[i-1][1] = "";
        admin();
        break;
    case 5:
    home();
    case 6:
    return;
    default:
        printf("the number not valid");
        admin();
        break;
    }
}
int home(){
    printf("\e[1;1H\e[2J");
    printf("\e[1;1H\e[2J");
    printf("\t\t\t log in as :\n");
    printf("\t\t\t1) Admin\n");
    printf("\t\t\t2) Student\n");
    printf("\t\t\t3) Exit\n");
    scanf("%i" , &i);
    switch(i){
        case 1:
            printf("\e[1;1H\e[2J");
            printf("\e[1;1H\e[2J");
            admin();
            break;
        case 2:
            printf("\t\ttype your number  \n");
            scanf("%i" , &i);
            if(student[i-1][1] == ""){
                home();
            }
            else{
                printf("\t\tHello %s\n you are fail in all exames\n" , student[i][1]);
                homeBack();
            }
            break;
        default:
            printf("the number not valid");
            home();
            break;
        
    }
}
int main(){
    printf("\e[1;1H\e[2J");
    printf("\e[1;1H\e[2J");
    home();
}
// asdg;lakjsd   (jet brains password)