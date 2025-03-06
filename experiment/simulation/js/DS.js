


function inputChange(){
	
	if(document.getElementById('Ts').value >5){
		
	alert('maintain the range');	
		
	}
	
	
}

function refresh(){
//location.reload();	
/* document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
dataOPPoints=[];	
dataOPPoints1=[];
 */
 location.reload();
//document.getElementById('0.3fr').style.display = "none";



}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];

//////////////////////



function system(){

            document.getElementById('tfbody').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var m = document.getElementById('m1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
			var a21=math.divide(math.round(math.multiply(math.divide(-K,m),1000)),1000);
		    var a22=math.divide(math.round(math.multiply(math.divide(-B,m),1000)),1000);
			
			console.log(a22);
			
			//var a23=math.divide(math.round(math.multiply(math.divide(math.multiply(m,m,g,l,l),den),1000)),1000);;
			var b2=math.divide(math.round(math.multiply(math.divide(1,m),1000)),1000);
			console.log(b2);
			
			//document.getElementById('a_22').value = a22;
			//document.getElementById('b_2').value = b2;
			
			//var a42=math.divide(math.round(math.multiply(math.divide(-math.multiply(m,l,b),den),1000)),1000);;
			//var a43=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(m,g,l,M),math.multiply(m,g,l,m)),den),1000)),1000);;
			//var b4=math.divide(math.round(math.multiply(math.divide(math.multiply(m,l),den),1000)),1000);;
			
			var a11=b1=c12=d11=0;
			var a12=c11=1;
			
			var mA = math.matrix([[a11, a12], [a21, a22]]);
			var mB = math.matrix([[b1], [b2]]);
			//var mC = math.matrix([[c11, c12, c13, c14],[c21, c22, c23, c24]]);
			//var mD = math.matrix([[d11], [d21]]);
			
			
			
			document.getElementById('matA').innerHTML = ' A =['+ a11+',\t'+a12+';\t\t'+a21+','+a22+']';
			document.getElementById('matB').innerHTML = ' B =['+ b1+';\t\t'+b2+']';
			document.getElementById('matC').innerHTML = ' C =['+ c11+',\t'+c12+']';
			document.getElementById('matD').innerHTML = ' D =['+ d11+']';
			
			//outputText1=" G(s)= ["+b0+"s\u00B2+("+b1+")s+("+b2+ ")] / [" +a0+"s<sup>2</sup>+("+a1+")s+("+a2+ ")]";
			
			//matA = "A = ["+a11+","+a12+"
			
			
			
			
			var EVs=math.eigs(mA);
			console.log(EVs);
			var EV=EVs.values;
			console.log(EV);
			var EV1=math.divide(math.round(math.multiply(EVs.values._data[0],1000)),1000);
			var EV2=math.divide(math.round(math.multiply(EVs.values._data[1],1000)),1000);
			//var EV3=math.divide(math.round(math.multiply(EVs.values._data[2],1000)),1000);
			//var EV4=math.divide(math.round(math.multiply(EVs.values._data[3],1000)),1000);
			
			console.log(EV);
			console.log(EV1);
			console.log(EV2);
			//console.log(EV3);
			//console.log(EV4);
			
			
			
			E1="Eigen Value-1 = " +EV1+ "";
			E2="Eigen Value-2 = " +EV2+ "";
			//E3="Eigen Value-3 = " +EV3+ "";
			//E4="Eigen Value-4 = " +EV4+ "";
			
			/*document.getElementById("Eigen_Value1").innerHTML=E1;
			document.getElementById("Eigen_Value2").innerHTML=E2;
			document.getElementById("Eigen_Value3").innerHTML=E3;
			document.getElementById("Eigen_Value4").innerHTML=E4;*/
			
		//	document.getElementById('EigenValues').innerHTML = ' Eigen Values =['+ EV1+',\t'+EV2+']';
			
			
			
			document.getElementById("run11").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			
			
			
			
			/*
			var mA = math.matrix([[a11, a12, a13, a14], [a21, a22, a23, a24], [a31, a32, a33, a34], [a41, a42, a43, a44]]);
            var mC = math.matrix([[120, 90, 60], [80, 70, 40], [60, 40, 20]]);
			var mB = math.matrix([[b1], [b2], [b3], [b4]]);

            // Matrix Multiplication
            var AA = math.multiply(mA, mA);
			var AAA = math.multiply(mA, mA, mA);
			var AB = math.multiply(mA, mB);
			var AAB = math.multiply(AA, mB);
			var AAAB = math.multiply(AAA, mB);
			
			var Qc = math.matrix([mB, AB, AAB, AAAB]);
			
			

            // Result [800, 630, 380]
	        console.log(AA);
			console.log(AAA);
			console.log(AB);
			console.log(AAB);
			console.log(AAAB);
			console.log(Qc);
			console.log(mB[0]);
			*/
	        
			
			//document.getElementById('my-div').innerHTML = '<img src="./images/pf.png">';
			
			//outputText2_1=" b<sub>0</sub>="+b0+";  b<sub>1</sub>="+b1+"; b<sub>2</sub>="+b2+ "; a<sub>0</sub>="+a0+";  a<sub>1</sub>="+a1+";  a<sub>2</sub>="+a2+ "";
			//outputText3=" p<sub>1</sub>="+-R1+"; p<sub>2</sub>="+-R2+ " b<sub>0</sub>="+b0+"; e<sub>0</sub>="+e0+";  e<sub>1</sub>="+e1+";  A<sub>1</sub>="+A1+ "; A<sub>2</sub>="+A2+"";
			
			//document.getElementById("output_text2_1").innerHTML=outputText2_1;
			//document.getElementById("output_text3").innerHTML=outputText3;
			}
function DSSMS(){
	document.getElementById('tfbody1').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			var m = document.getElementById('m1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
							
							
			
			var ad11=1;
			var ad12= Ts;
			var ad21_1=math.divide(math.multiply(K,Ts),m);
			
						
			var ad21=math.divide(math.round(math.multiply(ad21_1,1000)),1000);
			
			console.log(ad21);
			
			var ad22_1=math.add(1,-math.divide(math.multiply(B,Ts),m));
			var ad22=math.divide(math.round(math.multiply(ad22_1,1000)),1000);
			
			var bd1=math.divide(math.round(math.multiply(math.divide(math.multiply(Ts,Ts),m),1000)),1000);
			var bd2_1=math.divide(Ts,m);
			var bd2_2=math.divide(math.multiply(B,math.pow(Ts,2)),m);
			var bd2=math.divide(math.round(math.multiply(math.add(bd2_1,-bd2_2),1000)),1000);
			
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd1], [bd2]]);
			
			
			document.getElementById('matAd').innerHTML = ' F =['+ ad11+',\t'+ad12+';\t\t'+ad21+','+ad22+']';
			document.getElementById('matBd').innerHTML = ' g =['+ bd1+';\t\t'+bd2+']';
			
			
			
			document.getElementById("run1").style.visibility="visible";
			document.getElementById("clr").style.display="block";
			//document.getElementById('db1').style.display="block";
}

function EP(){
	document.getElementById('tfbody11').style.display = "block";
			//document.getElementById('tfbody2').style.display = "block";
	       
			
            var P1 = document.getElementById('np1').value;			
			var P2 = document.getElementById('np2').value;
			//var P3 = document.getElementById('np3').value;
           // var P4 = document.getElementById('np4').value;
			
			DP1="Desired Pole 1 = " +P1+ "";
			DP2="Desired Pole 2 = " +P2+ "";
			//DP3="Desired Pole 3 = " +P3+ "";
			//DP4="Desired Pole 4 = " +P4+ "";
			
			//document.getElementById("run2").style.display="block";			
			document.getElementById('db1').style.display="block";
			
			/*document.getElementById("Pole_Value1").innerHTML=DP1;
			document.getElementById("Pole_Value2").innerHTML=DP2;
			document.getElementById("Pole_Value3").innerHTML=DP3;
			document.getElementById("Pole_Value4").innerHTML=DP4;*/
			
			
			
			
}

////////////////////
    var Cntrl_Test1;
	var Cntrl_Test2;
	var Cntrl_Test3;
	
function DBR(){

	
	
	
	 document.getElementById('tfbody3').style.display = "block"; 
	 
	 
	        var m = document.getElementById('m1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
							
							
			
			var ad11=1;
			var ad12= Ts;
			var ad21_1=math.divide(math.multiply(K,Ts),m);
			
						
			var ad21=math.divide(math.round(math.multiply(ad21_1,1000)),1000);
			
			console.log(ad21);
			
			var ad22_1=math.add(1,-math.divide(math.multiply(B,Ts),m));
			var ad22=math.divide(math.round(math.multiply(ad22_1,1000)),1000);
			
			var bd1=math.divide(math.round(math.multiply(math.divide(math.multiply(Ts,Ts),m),1000)),1000);
			var bd2_1=math.divide(Ts,m);
			var bd2_2=math.divide(math.multiply(B,math.pow(Ts,2)),m);
			var bd2=math.divide(math.round(math.multiply(math.add(bd2_1,-bd2_2),1000)),1000);
			
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd1], [bd2]]);
			
					
			
			//////////////////////////////////////////////
			
			var abd1= math.divide(math.round(math.multiply(bd1*ad11 +bd2*ad12 ,1000)),1000);
			var abd2= math.divide(math.round(math.multiply(bd1*ad21 +bd2*ad22  ,1000)),1000);
			
			
			
			////////////////////////////////////////////////
			
			
			
			/////////////////////////////////////////////
			
			
			
			
			//////////////////////////////////////////////
			var ga= math.matrix([bd1, bd2]);
			var Faga= math.matrix([abd1,abd2]);
			//var FaFaga= math.matrix([aabd1, aabd2, aabd3]);
						
			document.getElementById('matQcg').innerHTML = 'ga ='+ ga;
			document.getElementById('matQcFg').innerHTML = ' Faga ='+ Faga;
			//document.getElementById('matQcFFg').innerHTML = ' Fa<sup>2</sup>ga ='+ FaFaga;
			
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qc= math.matrix([[bd1, abd1],[bd2, abd2]]);
			
			document.getElementById('matQc').innerHTML = ' Q<sub>c</sub> =['+ bd1+',\t'+abd1+';\t\t'+bd2+','+abd2+']'
			
			var DQc= math.divide(math.round(math.multiply(math.det(Qc),1000)),1000);
			console.log(DQc);
			//document.getElementById('RQc').value = 4;
			//DQc=0;
			
			if (DQc!=0)
			{  Cntrl_Test1=" Rank of Q<sub>c</sub> = Order of A = n = 2";			   
			   Cntrl_Test2="Determinent of Q<sub>c</sub> = " +DQc+ "";				    
			   Cntrl_Test3=" System is completely controllable";
			   document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
			   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
			   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   
			  
			   
			   //var k1 = math.divide(p1p2p3p4, math.add(a23b4,-a43b2));
			   
			  /* var k1_1 = math.add(math.multiply(ad11,bd2),-math.multiply(ad21,bd1));
			   var k1_2 = math.add(ad11,ad22);
			   var k1_3 = math.add(math.multiply(ad12,ad21),-math.multiply(ad11,ad22));
			   
			   var k1_4 = math.add(math.multiply(ad12,bd2),-math.multiply(ad22,bd1));
			   var k1_5 = math.add(math.multiply(ad21,bd1),-math.multiply(ad11,bd2));
			   
			   var k1=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(k1_1,k1_2),math.multiply(bd2,k1_3)),(math.add(math.multiply(bd2,k1_4),-math.multiply(bd1,k1_5)))),1000)),1000);
			   
			   var k2 = math.divide(math.round(math.multiply(math.divide(math.add(ad11,ad22,-math.multiply(bd1,k1)),bd2),1000)),1000); */
			   
			   var k1_1 = math.add(ad11,ad22);
			   var k1_2 = math.add(math.multiply(ad11,bd2),-math.multiply(ad21,bd1));
			   var k1_3 = math.add(math.multiply(ad12,ad21),-math.multiply(ad11,ad22));
			   var k1_4 = math.add(math.multiply(ad12,bd2),-math.multiply(ad22,bd1));
			   var k1_5 = math.add(math.multiply(ad21,bd1),-math.multiply(ad11,bd2));
			   
			   var k1_num = math.add(math.multiply(k1_1,k1_2),math.multiply(bd2,k1_3));
			   var k1_den = math.add(math.multiply(bd2,k1_4),-math.multiply(bd1,k1_5));
			   
			   var k1 = math.divide(math.round(math.multiply(math.divide(k1_num,k1_den),1000)),1000);
			   
			   var k2_num = math.add(ad11,ad22,-math.multiply(bd1,k1));
			   var k2 = math.divide(math.round(math.multiply(math.divide(k2_num,bd2),1000)),1000);
		
			   
			   
			   console.log(k1);
			   console.log(k2);
			   
			   
			  /* K1="Feedback gain k1 = " +k1+ "";
			   
			   document.getElementById("Feedback_gain_Value1").innerHTML=K1;
			   
			   K2="Feedback gain k2 = " +k2+ "";
			   
			   document.getElementById("Feedback_gain_Value2").innerHTML=K2;
			   
			   K3="Feedback gain k3 = " +k3+ "";
			   
			   document.getElementById("Feedback_gain_Value3").innerHTML=K3;
			   
			   
			   K4="Feedback gain k4 = " +k4+ "";
			   
			   document.getElementById("Feedback_gain_Value4").innerHTML=K4; */
			   
			   var Ka = math.matrix([[ k1, k2]]);
			   
			   console.log(Ka);
			   
			  
			   var ad11ad22 = math.divide(math.round(math.multiply(math.add(ad11,-ad22),1000)),1000);
			   
			   CharEq=" Characteristic equation of the closed loop system\t:";
			   document.getElementById("Char_Eq").innerHTML=CharEq;
			   document.getElementById('Char_equation').innerHTML = 'z<sup>2</sup>\t+\t z ( '+bd1+'\t k<sub>1</sub>\t+\t('+bd2+')\t k<sub>2</sub>\t - \t ( '+ad11ad22+'\t)) + [('+ad11+'\t-\t('+bd1+')k<sub>1</sub>)('+ad22+'\t-\t('+bd2+')k<sub>2</sub>)\t+\t('+ad12+'\t-\t('+bd1+')k<sub>2</sub>)('+bd2+'k<sub>1</sub>\t-t('+ad21+'))] =\t0';
			   
			   
			   DesEq=" Desired equation from the poles\t:";
			   document.getElementById("Des_Eq").innerHTML=DesEq;
			   document.getElementById('Desire_Eq').innerHTML = ' z<sup>2</sup> = 0';  //( '+ad11+'\t - \t ('+bd1+')\t k<sub>1</sub>)\t+\t ( '+ad22+'\t - \t ('+bd2+')\t k<sub>2</sub>) =\t0';    
			   
			  // Kfb="Feedback gain K = " +K+ "";
			   
			   //document.getElementById("Feedback_gain_Value_K").innerHTML=Kfb;
			   
			   document.getElementById('Deadbeat_gain_Value_K').innerHTML = ' Gain Values of Deadbeat K =['+ k1+',\t'+k2+']';
			   
			   
			   
			}
			   else 
			   {   Cntrl_Test1=" Rank of Q<sub>c</sub> < Order of A = n = 2";
		           Cntrl_Test2="Determinent of Q<sub>c</sub> = " +DQc+ "";		
			       Cntrl_Test3=" System is not controllable";
			       document.getElementById("Cntrl_Test1").innerHTML=Cntrl_Test1;
				   document.getElementById("Cntrl_Test2").innerHTML=Cntrl_Test2;
				   document.getElementById("Cntrl_Test3").innerHTML=Cntrl_Test3;
			   }
		
}
function showRank(){
document.getElementById("Cntrl_Test1").style.display="block";	
}

function showDetQc(){
document.getElementById("Cntrl_Test2").style.display="block";	
}

function showinfo(){
document.getElementById("Cntrl_Test3").style.display="block";
}

function GVc(){
document.getElementById("Char_Eq").style.display="block";
document.getElementById("Char_equation").style.display="block";
document.getElementById("Des_Eq").style.display="block";
document.getElementById("Desire_Eq").style.display="block";
document.getElementById("Deadbeat_gain_Value_K").style.display="block";

}



var Obsrl_Test5;
var Obsrl_Test6;
var Obsrl_Test7;

 var Cntrl_Test11;
 var Cntrl_Test12;
 var Cntrl_Test13;
	

function CNTR(){
	/*var Obsrl_Test1;
	var Obsrl_Test2;
	var Obsrl_Test3;
	var Obsrl_Test4;
	var Obsrl_Test5;
	var Obsrl_Test6;*/
	
	 document.getElementById('tfbody4').style.display = "block";
	
	        var m = document.getElementById('m1').value;			
			var B = document.getElementById('B1').value;
			var K = document.getElementById('K1').value;
           
						
	        var Ts = document.getElementById('Ts1').value;
						
			//var g=9.8;
			
			//var den=math.add(math.multiply(I,math.add(M,m)),math.multiply(M,m,l,l));
			
							
							
			
			var ad11=1;
			var ad12= Ts;
			var ad21_1=math.divide(math.multiply(K,Ts),m);
			
						
			var ad21=math.divide(math.round(math.multiply(ad21_1,1000)),1000);
			
			console.log(ad21);
			
			var ad22_1=math.add(1,-math.divide(math.multiply(B,Ts),m));
			var ad22=math.divide(math.round(math.multiply(ad22_1,1000)),1000);
			
			var bd1=math.divide(math.round(math.multiply(math.divide(math.multiply(Ts,Ts),m),1000)),1000);
			var bd2_1=math.divide(Ts,m);
			var bd2_2=math.divide(math.multiply(B,math.pow(Ts,2)),m);
			var bd2=math.divide(math.round(math.multiply(math.add(bd2_1,-bd2_2),1000)),1000);
			
			var mF = math.matrix([[ad11, ad12], [ad21, ad22]]);
			var mg = math.matrix([[bd1], [bd2]]);
			
					
			
			//////////////////////////////////////////////
			
			var abd1= math.divide(math.round(math.multiply(bd1*ad11 +bd2*ad12 ,1000)),1000);
			var abd2= math.divide(math.round(math.multiply(bd1*ad21 +bd2*ad22  ,1000)),1000);
			
			
			
			////////////////////////////////////////////////
			
			
			
			/////////////////////////////////////////////
			
			
			
			
			//////////////////////////////////////////////
			var ga= math.matrix([bd1, bd2]);
			var Faga= math.matrix([abd1,abd2]);
			//var FaFaga= math.matrix([aabd1, aabd2, aabd3]);
						
			document.getElementById('matQc1g').innerHTML = 'ga ='+ ga;
			document.getElementById('matQc1Fg').innerHTML = ' Faga ='+ Faga;
			//document.getElementById('matQcFFg').innerHTML = ' Fa<sup>2</sup>ga ='+ FaFaga;
			
			
			//var Qc1= math.matrix([[0, 1.818, -0.331, 12.209], [1.818, -0.331, 12.209, -4.433], [0, 4.545, -0.827, 141.873], [4.545, -0.827, 141.873, -31.349]]);
			//var DQc1=math.det(Qc1);
			//console.log(DQc1);
			
			var Qc1= math.matrix([[bd1, abd1],[bd2, abd2]]);
			
			document.getElementById('matQc1').innerHTML = ' Q<sub>c1</sub> =['+ bd1+',\t'+abd1+';\t\t'+bd2+','+abd2+']'
			
			var DQc1= math.divide(math.round(math.multiply(math.det(Qc1),1000)),1000);
			console.log(DQc1);
			//document.getElementById('RQc').value = 4;
			//DQc=0;
			
			if (DQc1!=0)
			{  Cntrl_Test11=" Rank of Q<sub>c1</sub> = Order of A = n = 2";			   
			   Cntrl_Test12="Determinent of Q<sub>c1</sub> = " +DQc1+ "";				    
			   Cntrl_Test13=" System is completely controllable";
			   document.getElementById("Cntrl_Test11").innerHTML=Cntrl_Test11;
			   document.getElementById("Cntrl_Test12").innerHTML=Cntrl_Test12;
			   document.getElementById("Cntrl_Test13").innerHTML=Cntrl_Test13;
			   
			  
			   
			   //var k1 = math.divide(p1p2p3p4, math.add(a23b4,-a43b2));
			 /*  
			   var kc1_1 = math.add(math.multiply(ad11,bd2),-math.multiply(ad21,bd1));
			   var kc1_2 = math.add(ad11,ad22);
			   var kc1_3 = math.add(math.multiply(ad12,ad21),-math.multiply(ad11,ad22));
			   
			   var kc1_4 = math.add(math.multiply(ad12,bd2),-math.multiply(ad22,bd1));
			   var kc1_5 = math.add(math.multiply(ad21,bd1),-math.multiply(ad11,bd2));
			   
			   var kc1=math.divide(math.round(math.multiply(math.divide(math.add(math.multiply(kc1_1,kc1_2),math.multiply(bd2,kc1_3)),(math.add(math.multiply(bd2,kc1_4),-math.multiply(bd1,kc1_5)))),1000)),1000);
			   
			   var kc2 = math.divide(math.round(math.multiply(math.divide(math.add(ad11,ad22,-math.multiply(bd1,kc1)),bd2),1000)),1000);
			   */
			   
			   var P1 = document.getElementById('np1').value;			
			   var P2 = document.getElementById('np2').value;
			
           
		      var Zp1 = math.pow(math.e,math.multiply(Ts,P1));
		      var Zp2 = math.pow(math.e,math.multiply(Ts,P2));
		   
		   
			  var p1=Zp1;
			  var p2=Zp2;
			  
			  
			  var p12 = math.add(p1,p2);
			  var p1p2 = math.multiply(p1,p2);
			   
			   var k1_1 = math.add(p12,ad11,ad22);
			   var k1_2 = math.add(math.multiply(ad11,bd2),-math.multiply(ad21,bd1));
			   var k1_3 = math.add(math.multiply(ad12,ad21),-math.multiply(ad11,ad22));
			   var k1_4 = math.add(math.multiply(ad12,bd2),-math.multiply(ad22,bd1));
			   var k1_5 = math.add(math.multiply(ad21,bd1),-math.multiply(ad11,bd2));
			   
			   var k1_num = math.add(math.multiply(k1_1,k1_2),math.multiply(bd2,k1_3));
			   var k1_den = math.add(math.multiply(bd2,k1_4),-math.multiply(bd1,k1_5));
			   
			   var kc1 = math.divide(math.round(math.multiply(math.divide(k1_num,k1_den),1000)),1000);
			   
			   var k2_num = math.add(p1p2,ad11,ad22,-math.multiply(bd1,kc1));
			   var kc2 = math.divide(math.round(math.multiply(math.divide(k2_num,bd2),1000)),1000);
		
			   
			   
		
			   
			   
			   console.log(p1);
			   console.log(p2);
			   
			   
			  /* K1="Feedback gain k1 = " +k1+ "";
			   
			   document.getElementById("Feedback_gain_Value1").innerHTML=K1;
			   
			   K2="Feedback gain k2 = " +k2+ "";
			   
			   document.getElementById("Feedback_gain_Value2").innerHTML=K2;
			   
			   K3="Feedback gain k3 = " +k3+ "";
			   
			   document.getElementById("Feedback_gain_Value3").innerHTML=K3;
			   
			   
			   K4="Feedback gain k4 = " +k4+ "";
			   
			   document.getElementById("Feedback_gain_Value4").innerHTML=K4; */
			   
			   var Kca = math.matrix([[ kc1, kc2]]);
			   
			   console.log(Kca);
			   
			  
			   
			   var ad11ad22 = math.divide(math.round(math.multiply(math.add(ad11,-ad22),1000)),1000);
			   
			   CharEq1=" Characteristic equation of the closed loop system\t:";
			   document.getElementById("Char_Eq1").innerHTML=CharEq1;
			   document.getElementById('Char_equation1').innerHTML = 'z<sup>2</sup>\t+\t z ( '+bd1+'\t k<sub>1</sub>\t+\t('+bd2+')\t k<sub>2</sub>\t - \t ( '+ad11ad22+'\t)) + [('+ad11+'\t-\t('+bd1+')k<sub>1</sub>)('+ad22+'\t-\t('+bd2+')k<sub>2</sub>)\t+\t('+ad12+'\t-\t('+bd1+')k<sub>2</sub>)('+bd2+'k<sub>1</sub>\t-t('+ad21+'))] =\t0';
			   
			   var p12 = math.divide(math.round(math.multiply(math.add(p1,p2),1000)),1000);
			   var p1p2 = math.divide(math.round(math.multiply(math.multiply(p1,p2),1000)),1000);
			   
			   DesEq1=" Desired equation from the poles\t:";
			   document.getElementById("Des_Eq1").innerHTML=DesEq1;
			   document.getElementById('Desire_Eq1').innerHTML = ' z<sup>2</sup>\t+\t('+p12+') z \t+\t '+p1p2+'\t = 0';  
			   
			  // Kfb="Feedback gain K = " +K+ "";
			   
			   //document.getElementById("Feedback_gain_Value_K").innerHTML=Kfb;
			   
			   document.getElementById('Feedback_gain_Value_Kc').innerHTML = ' Gain Values of State Feedback Kc =['+ kc1+',\t'+kc2+']';
			   
			   
			   
			}
			   else 
			   {   Cntrl_Test11=" Rank of Q<sub>c1</sub> < Order of A = n = 2";
		           Cntrl_Test12="Determinent of Q<sub>c1</sub> = " +DQc1+ "";		
			       Cntrl_Test13=" System is not controllable";
			       document.getElementById("Cntrl_Test11").innerHTML=Cntrl_Test11;
				   document.getElementById("Cntrl_Test12").innerHTML=Cntrl_Test12;
				   document.getElementById("Cntrl_Test13").innerHTML=Cntrl_Test13;
			   }
		
			
	        	
}

function showRankQc1(){
document.getElementById("Cntrl_Test11").style.display="block";	
}

function showDetQc1(){
document.getElementById("Cntrl_Test12").style.display="block";	
}

function showinfoQc1(){
document.getElementById("Cntrl_Test13").style.display="block";
}

function GVc1(){
document.getElementById("Char_Eq1").style.display="block";
document.getElementById("Char_equation1").style.display="block";
document.getElementById("Des_Eq1").style.display="block";
document.getElementById("Desire_Eq1").style.display="block";
document.getElementById("Feedback_gain_Value_Kc").style.display="block";


}


function test1(){
	document.getElementById('dropdownMenuButton1').innerHTML='Deadbeat Control';
	document.getElementById('chktest').value=0;
	document.getElementById('Trun').style.display="block";
}
function test2(){
	document.getElementById('dropdownMenuButton1').innerHTML='State Feedback Control';
	document.getElementById('chktest').value=1;
	document.getElementById('Trun').style.display="block";
}



function str(){
	if(document.getElementById('chktest').value==0){
		DBR();
	}
	if(document.getElementById('chktest').value==1){
		CNTR();
	}
	
}



