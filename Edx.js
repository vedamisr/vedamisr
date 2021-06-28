<script type="text/javascript">

function no(){
           
           var inputVal = document.getElementById("time").value;
           var inputint = document.getElementById("amount").value;
           var inputtime = document.getElementById("intrest").value;
           var tot = inputVal*inputint*inputtime;
           var tota=tot/100;
           var result=parseInt(tota)+parseInt(inputint);
         
         
           var display=document.getElementById("display");
          
           
           display.innerHTML=(result);
           
          
       }

</script>
