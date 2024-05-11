let string = "";
let memory = 0;
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML== 'M+'){
            memory += eval(string);
            console.log(memory)
            string = ""
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML== 'M-'){
                memory += eval(string);
                console.log(memory)
                string = ""
                document.querySelector('input').value = string;
            }
        else if (e.target.innerHTML == "MRC"){
            string = eval(memory.toString());
            console.log(string)
            document.querySelector('input').value = string;



        }
            else{

            string = string + e.target.innerHTML;
    
            document.querySelector('input').value = string   
        }
     })

})