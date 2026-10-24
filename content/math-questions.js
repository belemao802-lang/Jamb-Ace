/* JAMB ACE Mathematics bank: 400 original UTME-style practice questions.
   Original practice material, not a verified archive of official JAMB past questions. */
(function(){
  var out=[];
  function add(topic, q, answer, wrong, explanation, i){
    var pos=i%4, opts=[], wi=0;
    for(var j=0;j<4;j++) opts.push(j===pos?String(answer):String(wrong[wi++]));
    out.push(["Mathematics",topic,(i%5===4?"d":i%3===0?"e":"m"),[q,opts,pos,explanation]]);
  }
  function uniqueWrong(ans, vals){var a=[], seen=String(ans); vals.forEach(function(v){if(String(v)!==seen&&a.indexOf(String(v))<0&&a.length<3)a.push(String(v));}); var n=1;while(a.length<3){var v=Number(ans)+n*7;if(String(v)!==seen&&a.indexOf(String(v))<0)a.push(String(v));n++;}return a;}
  function num(topic,q,a,wrong,exp,i){add(topic,q,a,uniqueWrong(a,wrong),exp,i);}
  for(var i=0;i<20;i++){
    var a=i+2,b=(i%7)+2;
    switch(i%4){
      case 0:num("Number bases","Convert "+(a*3+1)+" from base ten to base two.",(a*3+1).toString(2),[(a*3).toString(2),(a*3+2).toString(2),(a*2+1).toString(2)],"Repeated division by 2 gives the binary digits from last remainder to first.",i);break;
      case 1:num("Number bases","Express "+(a+b)+" (base ten) in base "+(b+2)+".",(a+b).toString(b+2),[(a+b+1).toString(b+2),(a+b-1).toString(b+2),(a+b+2).toString(b+2)],"Convert to base ten first, then divide repeatedly by the target base.",i);break;
      case 2:num("Number bases","What is "+(a+3)+" in base ten written in base eight?",(a+3).toString(8),[(a+4).toString(8),(a+2).toString(8),(a+5).toString(8)],"Divide by 8 and read the quotient and remainder in reverse order.",i);break;
      default:num("Number bases","Convert "+(a+5)+" from base ten to base three.",(a+5).toString(3),[(a+6).toString(3),(a+4).toString(3),(a+7).toString(3)],"Use successive division by 3.",i);
    }
    var p=(i+2)*5, base=(i%8)+2;
    num("Fractions, decimals and percentages","Find "+p+"% of "+(base*20)+".",p/100*base*20,[p/100*base*20+5,p/100*base*20-5,p/100*base*20*2],"Percentage means per hundred: multiply the quantity by the percentage divided by 100.",i);
    var n=(i%8)+2, power=(i%3)+2;
    num("Indices and logarithms","Simplify "+n+"^"+power+" × "+n+"^2.",Math.pow(n,power+2),[Math.pow(n,power)*2,Math.pow(n,power+1),Math.pow(n,power+3)],"When multiplying powers with the same base, add the indices.",i);
    var A=i+3,B=i+5;
    num("Sets","If n(A) = "+A+", n(B) = "+B+" and n(A ∩ B) = 2, find n(A ∪ B).",A+B-2,[A+B,A+B+2,A+B-1],"n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",i);
    var r=(i%9)+2, sq=r*r+1;
    num("Surds","Simplify √"+(r*r*4),r*2,[r,r*4,r*2+2],"The square root of a perfect square is its non-negative square root.",i);
    var x=i%9+1, c=i%11+2;
    num("Algebraic expressions","Simplify "+x+"x + "+c+"x.",(x+c)+"x",[(2*x+c)+"x",(x+c+1)+"x",(x+2*c)+"x"],"Collect like terms by adding their coefficients.",i);
    var sol=i%12+2, k=i%8+2;
    num("Equations and inequalities","Solve "+k+"x + "+k+" = "+(k*sol+k)+".",sol,[sol+1,sol-1,sol+2],"Subtract the constant from both sides, then divide by the coefficient of x.",i);
    var rate=i%7+2, t=i%6+2;
    num("Variation","y varies directly as x. If y = "+(rate*2)+" when x = 2, find y when x = "+t+".",rate*t,[rate+t,rate*t+rate,rate*t-rate],"Direct variation has the form y = kx; find k using the given pair.",i);
    var first=i%10+1, diff=i%5+2, term=i%8+3;
    num("Sequences and series","Find the "+term+"th term of the arithmetic sequence "+first+", "+(first+diff)+", "+(first+2*diff)+", …",first+(term-1)*diff,[first+term*diff,first+(term-2)*diff,first+diff*term+1],"For an arithmetic sequence, T_n = a + (n − 1)d.",i);
    var fx=i%9+2, xx=i%7+1;
    num("Functions","If f(x) = 2x + "+fx+", find f("+xx+").",2*xx+fx,[2*xx-fx,xx+fx,2*(xx+fx)],"Substitute the given value of x into the function.",i);
    var x1=i%7, y1=i%5+1, x2=x1+2, y2=y1+(i%4)+1;
    var slope=(y2-y1)/(x2-x1);
    num("Coordinate geometry","Find the gradient of the line through ("+x1+", "+y1+") and ("+x2+", "+y2+").",String(slope),[String(slope+1),String(slope-1),String(y2-y1)],"Gradient = change in y divided by change in x.",i);
    var ang=(i%6+2)*10;
    num("Geometry","The angles of a triangle are "+ang+"°, "+(ang+10)+"° and x°. Find x.",180-ang-(ang+10),[180-ang,ang+10,180-2*ang],"Angles in a triangle add up to 180 degrees.",i);
    var length=i%9+3, width=i%6+2;
    num("Mensuration","Find the area of a rectangle of length "+length+" cm and width "+width+" cm.",length*width,[2*(length+width),length+width,length*width+length],"Area of a rectangle = length × width.",i);
    var opposite=i%7+3, adjacent=i%5+2;
    num("Trigonometry","For a right triangle, opposite = "+opposite+" and adjacent = "+adjacent+". What is tan θ?",(opposite/adjacent).toFixed(2),[(adjacent/opposite).toFixed(2),(opposite+adjacent).toFixed(2),(opposite*adjacent).toFixed(2)],"tan θ = opposite ÷ adjacent. Round to two decimal places.",i);
    var d1=i%9+2, d2=i%7+3;
    num("Statistics","Find the mean of "+d1+", "+d2+" and "+(d1+d2+3)+".",(d1+d2+d1+d2+3)/3,[(d1+d2+3)/3,(d1+d2+4)/3,(d1+d2+2)/3],"Mean = sum of observations divided by the number of observations.",i);
    var red=i%5+1, blue=i%4+2, total=red+blue;
    num("Probability","A bag contains "+red+" red and "+blue+" blue counters. Find P(red).",(red/total).toFixed(2),[(blue/total).toFixed(2),(red/(total+1)).toFixed(2),((red+1)/total).toFixed(2)],"Probability = number of favourable outcomes divided by total equally likely outcomes.",i);
    var vx=i%7+1, vy=i%5+2;
    num("Vectors","If a = ("+vx+", "+vy+") and b = ("+vy+", "+vx+"), find a + b as an ordered pair.","("+(vx+vy)+", "+(vx+vy)+")",["("+(vx+vy)+", "+(vy-vx)+")","("+(vx-vy)+", "+(vx+vy)+")","("+(vx*vy)+", "+(vx+vy)+")"],"Add corresponding components of the vectors.",i);
    var m=i%6+1, nn=i%5+2;
    num("Matrices","For A = [[ "+m+", 0 ], [ 0, "+nn+" ]], find det(A).",m*nn,[m+nn,m*nn+1,m*nn-1],"For a 2 × 2 matrix [[a,b],[c,d]], determinant = ad − bc.",i);
    var cost=(i%8+2)*100, disc=(i%4+1)*5;
    num("Commercial arithmetic","An item costs ₦"+cost+" and is discounted by "+disc+"%. Find the sale price.",cost*(100-disc)/100,[cost*disc/100,cost*(100+disc)/100,cost-disc],"Sale price = marked price × (1 − discount rate).",i);
    var speed=(i%8+2)*5, time=i%5+2;
    num("Word problems","A bus travels at "+speed+" km/h for "+time+" hours. How far does it travel?",speed*time,[speed+time,speed*time+speed,speed*time-time],"Distance = speed × time when speed is constant.",i);
  }
  window.JAMB_EXTRA_QUESTIONS=(window.JAMB_EXTRA_QUESTIONS||[]).concat(out);
  window.JAMB_MATH_META={subject:"Mathematics",count:out.length,type:"original UTME-style practice",officialPastQuestions:0};
})();