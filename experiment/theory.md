# Theory

Linear time invariant system may be represented in state space form by the following equations:
State equation:

$$ \dot{x}(t)=A x(t)+B u(t) \tag{1a} $$

Output equation:

$$ y(t)= C x(t) \tag{1b} $$

<b><i>Deadbeat Control design:</i></b> <br>
A deadbeat controller is one where the system's output reaches its desired value in the smallest number of steps (the so-called "deadbeat time" or "deadbeat response"). 
This is achieved by designing the control law such that the poles of the closed-loop system lie at the origin. </br>
The discrete-time state-space model with feedback can be written as:</br>
State equation:

$$ {x}[k+1]=F x[k]+g u[k] \tag{2a} $$

Output equation:

$$ y[k] = C x[k] \tag{2b} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is state vector, <span style="font-family:Sitka Text;font-style:italic">y</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is output vector, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is input or control vector, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> is system matrix, 
<span style="font-style:italic;font-size:18px">g</span> is input matrix, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">C</span> is output matrix. </br></br>

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> is the state feedback gain matrix, <span style="font-family:Sitka Text;font-style:italic">r</span>[<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span>] is the reference signal. 
</br>
The control input is typically given by:

$$ u[k] = - K x[k] + r[k] \tag{3} $$

State feedback design for deadbeat response:</br>
The goal of deadbeat control is to place the poles of the closed-loop system at the origin of the z-plane, i.e., all the eigenvalues of (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) should be at zero. This ensures the system reaches the equilibrium state (desired state) as quickly as possible.
For a discrete-time system, the characteristic equation of the closed-loop system is derived from the state-space model with the feedback gain <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>. The poles of the system are determined by the eigenvalues of (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>). </br></br>
Controllability: The system must be controllable for a deadbeat design to be possible. Controllability ensures that it's possible to drive the system from any initial state to any desired state using the available inputs. </br></br>
Pole Placement: To achieve a deadbeat response, place the poles of the closed-loop system at the origin. This requires solving for the feedback gain matrix <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> that ensures that all eigenvalues of the matrix (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) are zero. </br>
Solve for <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> such that the eigenvalues of (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) are at the origin.<br/>
• Determinant of (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) = 0. </br>
• Trace of (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span> - <span style="font-style:italic;font-size:18px">g</span><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) = 0. </br></br>
<b><i>State feedback design:</i></b> <br>
A necessary and sufficient condition for arbitrary pole placement is that the pair (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">F</span>, <span style="font-style:italic;font-size:18px">g</span>) must be controllable.<br/>
Control input:

$$ u[k]= - K x[k] \tag{4} $$

where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span> is the state feedback gain vector,i.e.,

$$ K = [k_1 \ k_2 \ ... \ k_n]  $$

With this control input, the closed loop system is as follows:

$$ x[k+1]=(F-gK) x[k]  $$

The characteristic equation of the closed loop system is,

$$ |zI-(F-gK)|=0  $$

For <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">n</span><sup>th</sup> order system, the characteristic equation is,

$$ z^n + k_n z^{n-1} + k_{n-1} z^{n-2} + ... + k_1=0 \tag{5} $$

The desired closed loop poles (in s domain) are <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P</span><sub><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">1</span></sub>, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P</span><sub><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">2</span></sub>, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P</span><sub><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">3</span></sub>, ... , <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P</span><sub><span style="font-family:Bodoni MT;font-style:italic;font-size:18px">n</span></sub>.  </br>
The desired closed loop poles (in z domain) are <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P<sub>z1</sub></span>, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P<sub>z2</sub></span>, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P<sub>z3</sub></span>, ... , <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">P<sub>zn</sub></span>.  </br>
</br>
Then the desired characteristic equation is:

$$ (z-{P_z}_1)(z-{P_z}_2)(z-{P_z}_3)...(z-{P_z}_n)=0 \tag{6} $$

The required state feedback gain (<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">K</span>) vector elements are obtained by comparing the matching coefficients of (5) and (6).
<br/><br/>

<b><i>State Space Model of Mechanical System:</i></b> <br>
Consider the mechanical system shown in Fig. 1. Assume that the system is linear. The external force <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is the input to the system, and the displacement <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) of the mass is the output. 
The displacement <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">y</span>(<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">t</span>) is measured from the equilibrium position in the absence of the external force. This system is a single-input, single-output system. </br>
<div align="center">
<img class="img-fluid"  src="./images/Mechanical Model.png" alt=""><br>        
<figcaption style="color:black"> Fig.1. Mechanical System</figcaption>						  
</div><br/>
where, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">m</span> is mass, 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">b</span> is damping friction, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">k</span> is the spring constant, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">y</span> is the displacement (output) and 
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u</span> is the external force. </br></br>
The system equation is:</br>

$$ m\ddot{y} + b \dot{y} + k y = 0 \tag{7} $$

<b><i>State Space form of the Mechanical system:</i></b> <br>
The state-space form:</br>

<br/> Continuous State Space form:

$$	\begin{bmatrix} 	\dot{x}_1(t)  \newline	\dot{x}_2(t) \end{bmatrix}	= \begin{bmatrix} 	0  & 1 \newline	-\frac{k}{m}  & -\frac{b}{m} \end{bmatrix} \begin{bmatrix} 	x_1(t)  \newline	x_2(t) \end{bmatrix} + \begin{bmatrix} 0  \newline	\frac{1}{m} \end{bmatrix} u(t)	 $$

$$	y(t)	= \begin{bmatrix} 	0  & 1 \end{bmatrix} \begin{bmatrix} 	x_1(t)  \newline	x_2(t) \end{bmatrix} 	\quad	\tag{8} $$

where,
<span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>1</sub></span> is the displacement, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">x<sub>2</sub></span> is the velocity, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">u(t)</span> is the external force, <span style="font-family:Bodoni MT;font-style:italic;font-size:18px">y(t)</span> is the output. 
<br/><br/>

<br/> Discrete State Space form:

$$\begin{bmatrix} 	x_1 [k+1]  \newline	x_2 [k+1] \end{bmatrix}	= \begin{bmatrix} 	1  & T_{s} \newline	-\frac{k T_{s}}{m}  & 1-\frac{b T_{s}}{m}  \end{bmatrix} \begin{bmatrix} 	x_1 [k] \newline	x_2 [k] \end{bmatrix} + \begin{bmatrix} \frac{{T_{s}}^2}{2m}   \newline	\frac{T_{s}}{m} (1-\frac{b T_{s}}{2m})   \end{bmatrix} u[k]$$ 


$$y [k]	= \begin{bmatrix} 	0  & 1 \end{bmatrix} \begin{bmatrix} 	x_1[k]  \newline	x_2[k] \end{bmatrix} 	\quad	\tag{9}$$



<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
