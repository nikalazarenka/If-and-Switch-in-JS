function isBelong(){
    let x = +document.getElementById("x").value;
    let y = +document.getElementById("x").value;

    if(x>0 && y>0)
        document.getElementById("belongs").value = "Да";
    else
        document.getElementById("belongs").value = "Нет";

}
function bestSubject(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    let d = +document.getElementById("d").value;

    if(a>b && a>c && a>d)
        document.getElementById("best").value = "БДиСУБД";
    if(b>a && b>c && b>d)
        document.getElementById("best").value = "КПиЯП";
    if(c>a && c>b && c>d)
        document.getElementById("best").value = "ПСCИП";
    if(d>a && d>b && d>c)
        document.getElementById("best").value = "Компьютерные сети";
}
function isEqual(){
    let number = +document.getElementById("number").value;
    if(number.toString().length==3) {
        let lastDigit = number % 10;
        let firstDigit = Math.round(number / 100);
        if (firstDigit == lastDigit)
            document.getElementById("answer").value = "Да";
        else
            document.getElementById("answer").value = "Нет";
    }
    else
        document.getElementById("answer").value = "Неверное число";
}
function Elephant(){
    let number = +document.getElementById("number").value;
    let answer;
    if(number>=15 && number<=30) {
        switch (number % 10) {
            case 5:
                answer = number + " слонов";
                break;
            case 6:
                answer = number + " слонов";
                break;
            case 7:
                answer = number + " слонов";
                break;
            case 8:
                answer = number + " слонов";
                break;
            case 9:
                answer = number + " слонов";
                break;
            case 0:
                answer = number + " слонов";
                break;
            case 1:
                answer = number + " слон";
                break;
            case 2:
                answer = number + " слона";
                break;
            case 3:
                answer = number + " слона";
                break;
            case 4:
                answer = number + " слона";
                break;
        }
        document.getElementById("answer").value = answer;
    }
    else
        document.getElementById("answer").value = "Недопустимое количество";
}