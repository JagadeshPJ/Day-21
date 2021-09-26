const countDownTimer= () =>{
    setTimeout(() =>{
        document.getElementById("countDown").innerHTML=10
        setTimeout(() =>{
            document.getElementById("countDown").innerHTML=9
            setTimeout(() =>{
                document.getElementById("countDown").innerHTML=8
                setTimeout(() =>{
                    document.getElementById("countDown").innerHTML=7
                    setTimeout(() =>{
                        document.getElementById("countDown").innerHTML=6
                        setTimeout(() =>{
                            document.getElementById("countDown").innerHTML=5
                            setTimeout(() =>{
                                document.getElementById("countDown").innerHTML=4
                                setTimeout(() =>{
                                    document.getElementById("countDown").innerHTML=3
                                    setTimeout(() =>{
                                        document.getElementById("countDown").innerHTML=2
                                        setTimeout(() =>{
                                            document.getElementById("countDown").innerHTML=1
                                            setTimeout(() =>{
                                                document.getElementById("countDown").innerHTML="Happy Independence Day!"
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000);
    
};
