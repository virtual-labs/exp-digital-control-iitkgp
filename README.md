## Introduction

<div align="center">
<img src="experiment/images/iitkgp.png" width="10%">
</div>

<b>Discipline | <b>Electrical Engineering 
:--|:--|
<b> Lab | <b> Digital Control Laboratory
<b> Experiment|     <b> Design of digital control systems with deadbeat response and other controllers and Exp 9

### About the Experiment 

Designing digital control systems with a deadbeat response aims to drive the output to the desired value in the shortest time, typically within a finite number of sampling periods, without oscillation or overshoot. 
This approach is well-suited for applications requiring fast and precise control. Deadbeat control is a linear strategy applied to discrete-time systems, focused on bringing each initial state to zero as quickly as possible. </br>
The controller is designed to reach the target value in exactly N steps, where N corresponds to the number of states in the system. The key idea is to cancel the system's dynamics by placing the poles of the closed-loop system at the origin (or on the unit circle for higher-order systems). </br>
Essentially, the deadbeat controller is the inverse of the plant's transfer function, with adjustments made to ensure stability and practicality. This method guarantees a quick and accurate response while maintaining system integrity. </br></br>
<b><i>Deadbeat controller design using State Space model:</i></b> <br>
Linear time invariant system may be represented in state space form by the following equations:
</br>
State equation:

$$ \dot{x}(t)=A x(t)+B u(t) \tag{1a} $$

Output equation:

$$ y(t)= C x(t) u(t) \tag{1b} $$

</br>
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">A</span> is system matrix, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">B</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix.</br></br>

                
Discrete state space form represented by the following equations </br>
State equation:

$$ {x}[k+1]=F x[k]+g u[k] \tag{2a} $$

Output equation:

$$ y[k]= C x[k] u[k] \tag{2b} $$

<div align="center">
<img class="img-fluid"  src="experiment/images/F_g.png" alt=""><br>
</div>

<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> is system matrix, 
<span style="font-style:italic;font-size:18px">g</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix. </br></br>
The control input is typically given by:</br>

$$ u[k]= - K x[k] + r[k] \tag{3} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> is the state feedback gain matrix, <span style="font-family:Sitka Text;font-style:italic">r</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is the reference signal (desired output). 


<b>Subject matter expertise | <b> **Prof. Alok Kanti Deb**
:--|:--|
<b> Institute | <b>  **Indian Institute of Technology Kharagpur**
<b> Email id|     <b>  **alokkanti@ee.iitkgp.ac.in**
<b> Department |  **Department of Electrical Engineering**
<b>Webpage| <b> http://www.iitkgp.ac.in/department/EE/faculty/ee-alokkanti

### Contributors List

SrNo | Name | VLabs Developer or Integration Engineer | Designation | Department| Institute
:--|:--|:--|:--|:--|:--|
1 | **Kamal Sandeep Karreddula** | Developer | Research Scholar | Department of Electrical Engineering | IIT Kharagpur | 
2 | **Piyali Chattopadhyay** | Integration Engineer | Project Scientist | Department of Mechanical Engineering | IIT Kharagpur |


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
