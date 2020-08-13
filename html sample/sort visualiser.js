var blist = [29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 319, 348, 377, 406, 435, 464, 493, 522, 551, 580];
            var color = ["white","#00ff00","orange"];
            var slist = [29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 319, 348, 377, 406, 435, 464, 493, 522, 551, 580];
            var size = 20;
            var time = 500;
            <!--###################################################Common Functions########################################################-->
            function draw(){
                bdraw();
                sdraw();
            }
            function timeinc(){
                time+=arguments[0];
            }
            <!--###################################################Bubblesort elements######################################################-->
            function bubblesort(){
                i = 20 - 1;
                while (i>=0){
                    var j=0;
                    console.log(i,j);
                    while(j<i){
                        if (blist[j]>blist[j+1]){   
                            var temp = blist[j];
                            blist[j] = blist[j+1];
                            blist[j+1] = temp;
                        }
                        j++;
                    }                   
                    i--;
                    }
                    for (i=0;i<20;i++){
                        timeinc(15);
                        setTimeout(bclear , time);
                        timeinc(15);
                        setTimeout(bdraw , time,"1",i);
                        timeinc(15);
                    }
                setTimeout(bclear , time+150);
                setTimeout(bdraw , time+199,"1");
            }
            function bdraw(){
                var canvas = document.getElementById("bubblesort")
                var ctx = canvas.getContext("2d");
                var x=0;
                var y=0;
                var width = 20;
                var gap = 15;
                if (arguments.length == 1){
                    ctx.fillStyle = color[1];
                    for (i=0;i<20;i++){
                        height=blist[i];
                        ctx.fillRect(x+15,canvas.height - height,width,height);
                        x+=width+gap;
                    }
                }
                else if(arguments.length > 1){
                    for (i=0;i<20;i++){
                        height=blist[i];
                        if (i==arguments[1]){
                            ctx.fillStyle = color[2];
                        }
                        else{
                            ctx.fillstyle = color[0];
                        }
                        ctx.fillRect(x+15,canvas.height - height,width,height);
                        x+=width+gap;
                    }
                }
                else{
                    ctx.fillStyle = color[0];
                    for (i=0;i<20;i++){
                        height=blist[i];
                        ctx.fillRect(x+15,canvas.height - height,width,height);
                        x+=width+gap;
                    }
                }
            return ;
            }
            function bcreatelist(){
                for (i = 0;i<blist.length;i++){
                blist[i]=Math.floor(Math.random()*500) + 50;
                }
                bclear();
                bdraw();
                time = 500;
            }
            function bclear(){
                var canvas =document.getElementById("bubblesort");
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "black";
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "white";
                return ;
            }function breset(){
                blist=[29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 319, 348, 377, 406, 435, 464, 493, 522, 551, 580];
                bclear();
                bdraw();
                time = 500;
            }
            <!--######################################################Selection Sort######################################################-->
            function selectionsort(){
                var len = 20;
                var min ;
                 for (i=0;i<len;i++){
                    min = i;
                    for (j=i+1;j<len;j++){
                        if (slist[min] > slist[j]){
                            min = j;
                        }
                    }
                    var temp = slist[i];
                    slist[i] = slist[min];
                    slist[min] = temp; 
                 }
                 for (i=0;i<20;i++){
                    timeinc(15);
                    setTimeout(sclear , time);
                    timeinc(15);
                    setTimeout(sdraw , time,"1",i);
                    timeinc(15);
                }
            setTimeout(sclear , time+150);
            setTimeout(sdraw , time+199,"1");
            }

            function sdraw(){
                var canvas = document.getElementById("selectionsort")
                var ctx = canvas.getContext("2d");
                var x=0;
                var y=0;
                var width = 20;
                var gap = 15;
                if (arguments.length == 1){
                    ctx.fillStyle = "#00ff00";
                }
                else if(arguments.length>1){
                    for (i=0;i<20;i++){
                        height=slist[i];
                        if (i==arguments[1]){
                            ctx.fillStyle = color[2];
                        }
                        else{
                            ctx.fillstyle = color[0];
                        }
                        ctx.fillRect(x+15,canvas.height - height,width,height);
                        x+=width+gap;
                    }
                }
                else{
                    ctx.fillStyle = "white";
                }
                for (i=0;i<slist.length;i++){
                    height=slist[i];
                    ctx.fillRect(x+15,canvas.height - height,width,height);
                    x+=width+gap;
                }
            }
            
            function screatelist(){
                for (i = 0;i<slist.length;i++){
                slist[i]=Math.floor(Math.random()*500) + 50;
                }
                sclear();
                sdraw();
            }
            
            function sclear(){
                var canvas =document.getElementById("selectionsort");
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "black";
                ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.fillStyle = "white";
            }
            
            function sreset(){
                slist=[29, 58, 87, 116, 145, 174, 203, 232, 261, 290, 319, 348, 377, 406, 435, 464, 493, 522, 551, 580];
                sclear();
                sdraw();
            }