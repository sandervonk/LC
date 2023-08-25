# Lon Capa 2C - Guided Solutions

## Q1: Acceleration and Velocity Vectors

### Question:

> If the acceleration vector of an object is zero, its velocity vector
>
> - [ ] can change length but cannot turn
> - [ ] is also zero
> - [x] is not changing
> - [ ] can turn but cannot change in length

### Reasoning:

By Newton's first law of motion (inertia), "an object in motion tends to stay in motion unless an external force acts upon it"

As an extension of this idea, a physics body's velocity (state of motion) will stay constant unless acted upon by an external force

Force is equal to the product of mass and acceleration ($F = m*a$), and as a result, with any 0 acceleration, it is impossible for there to be any force excreted on the object.

Since there is no external force working on the object (since the acceleration vector is zero), its velocity will remain changed / **is not changing**.

## Q2: Circling Airplane

### Question:

> A line-controlled model airplane is propelled by a small gasoline engine and propeller and flies in a circle at the end of its control lines. Its acceleration vector points
>
> - [ ] in its direction of motion.
> - [ ] opposite to its direction of motion.
> - [x] in the direction of the person holding the control lines.
> - [ ] away from the person holding the control lines.

### Reasoning:

For an object to stay remain in circular motion, it must have a centripetal force, a "force that makes a body follow a curved path."

For this path to remain circular, it must have a centripetal acceleration of $a_c = \frac{v^2}{r}$. Though this equation is unimportant for this question, it is very helpful to know that the direction of the acceleration must be towards the center of the circle.

As a result, in this instance, since the model airplane is following a circular path, its acceleration vector must be pointing towards the center of the circle - **in the direction of the person holding the control lines**.# Lon Capa ## - Guided Practice

## Q3: Banking Automobile

### Question:

> An automobile enters a $40.0°$ curve with a speed of $46.0 \, \frac{\text m}{\text s}$ and emerges from this curve $11.0 \, \text s$ later with the same speed. What is the magnitude of the average acceleration during this time interval?
> (in $\frac{\text m}{\text s^2}$)

### Variable Breakdown

> $\Theta_i = 0.0°$
>
> > $\Theta_f = 40.0°$

> $|\vec v_i| = 46.0 \, \frac{\text m}{\text s}$
>
> > $|\vec v_f| = 46.0 \, \frac{\text m}{\text s}$

> $\Delta t = 11.0 \, \text s$

### Steps / Summary

#### Setting up the vector

In order to make this problem a tiny bit easier to comprehend, we'll be setting up velocity vectors for the initial and final velocities ($\vec v_i$ and $\vec v_f$) in the format:

> $\vec A \ = \ <A_x, \, A_y>$

For our velocity vectors, we can rewrite the $\Theta$ angle and $|\vec v|$ magnitudes in this form using some basic trig:

> $\vec v = <v_x, \, v_y>$
>
> > $\vec v = <\cos{\Theta} * v_x \, \sin{\Theta} * v_y>$

$\vec v_i = <\cos{\Theta_i} * |\vec v_{i}|, \, \sin{\Theta_i} * |\vec v_{i}|>$

$\vec v_f = <\cos{\Theta_f} * |\vec v_{f}|, \, \sin{\Theta_f} * |\vec v_{f}|>$

#### Finding the vector for change in velocity

To find the vector $\Delta \vec v$, we can simply use:

$\Delta \vec v = \vec v_f - \vec v_i$

and substitute in the values that we just found to get:

$\Delta \vec v = <
\cos{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
, \, 
\sin{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}| >$

#### Solving for acceleration

To find the magnitude of the acceleration vector $|\vec a|$, we can use the definition:

$\vec a = \frac{\Delta \vec v}{\Delta t}$

$|\vec a| = \frac{|\Delta \vec v|}{\Delta t}$

and substitute in the magnitude of a vector $\vec A$ using the Pythagorean theorem:

> $|\vec A| = \sqrt{

    {\left(
    	A_{x}
    \right)^2}
    +
    {\left(
    	A_{y}
    \right)^2}

}$

which with our change in velocity vector $\Delta \vec v$ becomes:

$|\Delta \vec v| = \sqrt{
	{\left(
		v_{f,x} - v_{i,x}
	\right)^2}
	+
	{\left(
		v_{f,y} - v_{i,y}
	\right)^2}
}$

$|\Delta \vec v| = \sqrt{
	{\left(
		\cos{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
	\right)^2}
	+
	{\left(
		\sin{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
	\right)^2}
}$

which gets substituted back in for the magnitude of deceleration:

$|\vec a| = \frac{|\Delta \vec v|}{\Delta t}$

$|\vec a| = \frac
{\sqrt{
	{\left(
		\cos{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
	\right)^2}
	+
	{\left(
		\sin{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
	\right)^2}
}}
{\Delta t}$

It might not be pretty, but it works!

For my example problem, this works out to:

> $|\Delta \vec v| = \sqrt{

    {\left(
    	\cos{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
    \right)^2}
    +
    {\left(
    	\sin{\Theta_f} * |\vec v_{f}| - \cos{\Theta_i} * |\vec v_{i}|
    \right)^2}

}$

> > $|\Delta \vec v| = {46.0 \, \frac{\text m}{\text s}} \* \sqrt{

    {\left(
    	\cos{40.0°} - \cos{0.0°}
    \right)^2}
    +
    {\left(
    	\sin{40.0°} - \sin{0.0°}
    \right)^2}

}$

> > $|\Delta \vec v| \approx 31.466 \, \frac{\text m}{\text s^2}$
> >
> > $|\vec a| = \frac{|\Delta \vec v|}{\Delta t}$
> >
> > $|\vec a| \approx \frac{31.466 \, \frac{\text m}{\text s^2}}{11.0 \, \text s}$
> >
> > $|\vec a| \approx 2.861 \, \frac{\text m}{\text s^2}$

Giving me a final answer of `2.861 m/s^2`

**This page is currently a work in progress, thanks for your patience!**
