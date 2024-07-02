//grading system

let marks = 87
function results() {
    //grade A
    if (marks > 79) {
        return "A"

    //grade B
    }else if (marks >= 60 ) {
        return "B"

    //grade C
    }else if (marks >= 50) {
        return "C"
    
    //grade D    
    }else if (marks >= 40) {
        return "D"
     
    //grade E    
    }else{
        return "E"
    }
}


console.log(results())