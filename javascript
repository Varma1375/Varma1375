<!DOCTYPE html>
<html>
    <head>
        <title>element</title>
    </head>
    <body>
        <h1>JavaScript HTML DOM</h1>

        <p id="intro"><b>line1</b></p>
        <p id="intro"><b>line2</b></p><br>
        <p id="demo"></p>
        <p id="demo1"></p>
        <script>
        const element = document.getElementById("intro");
        const element1 = document.getElementsByTagName("p");
        document.getElementById("demo").innerHTML = element.innerHTML;
        document.getElementById("demo1").innerHTML = element1[1].innerHTML;
        const a=[];
        for (let i=0;i<document.querySelectorAll("p").length;i++){
            a.push(document.querySelectorAll("p")[i].iinnerHTML);
        }
        console.log(a);
        </script>
    </body>
</html>
