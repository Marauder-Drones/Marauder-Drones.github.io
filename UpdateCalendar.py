#Update Calendar script by Thomas Mullen
#Should save me some time

#Load events from text file
f = open("upcoming_events.txt")
lines = f.readlines()
f.close()
#Month, Date, Name, Desc

calItems = []
for i in lines:
    if i[0] != "#" and i !="\n": #Comments are #
        calItems.append(i.split(",") )#Delimiter is ,

calHeader="<!--BEGINCAL-->"
calFooter="<!--ENDCAL-->"

#Build calendar
cal = '''<!--BEGINCAL-->
<section>
<header>
<h2 style="font-size:3em; text-align:left; margin-bottom:1em;">Upcoming Events</h2>
</header>
<ul class="dates">
<!--This is a calender item!-->\n'''

for i in calItems:
    cal+="<li><span class=\"date\">"+i[0]+"<strong>"+i[1]+"</strong></span><h3><a>"+i[2]+"</a></h3><p>"+i[3]+"</p>\n"

cal+='''</li>
</ul>
</section>
<!--ENDCAL-->\n'''

#Change files
import os
for file in os.listdir(os.path.dirname(os.path.realpath(__file__))):
    if file.endswith(".html"):
        f = open(file,"r")
        lines = f.readlines()
        f.close()

        start = 0
        end = 0
        LN = -1
        
        for i in lines:
            LN+=1
            if calHeader in i:
                start = LN
            if calFooter in i:
                end = LN
            
        lines = lines[:start]+[cal]+lines[end+1:]

        f = open(file,"w")
        for i in lines:
            f.write(i)
        f.close()
            
            
