        var tablinks =document.getElementsByClassName("tab-links");
        var tablecontents =document.getElementsByClassName("table-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-links");
            }
            for(tablecontent of tablecontents){
                tablecontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-links");
            document.getElementById(tabname).classList.add("active-tab");
        }
