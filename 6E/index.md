# Lon Capa 6E | Guided Solutions

> By Sander Vonk

# \*Lon Capa 6E | Question 1

> **Question:** A _2029_ kg Oldsmobile traveling east on Saginaw Street at _13.0_ m/s is unable to stop on the ice covered intersection for a red light at Abbott Road. The car collides with a _3928_ kg truck hauling animal feed north on Abbott at _9.3_ m/s. The two vehicles remain locked together after the impact. Calculate the velocity of the wreckage immediately after the impact. Give the speed for your first answer and the compass heading for your second answer. (remember, the CAPA abbreviation for degrees is deg)

## Finding Momenteum:

p_c = 2029 kg \* 13 m/s (east)

p_t = 3928 kg \* 9.3 m/s (north)

## Velocity - East:

p_f_e = p_c

m_f_e \* v_f_e = p_c

v_f_e = p_c / m_f

v_f_e = (2029 kg \* 13 m/s) / (2029
kg + 3928 kg)

`v_f_e = 4.4279 m/s`

## Velocity - North:

> same process as East
> p_f_n = p_t

v_f_n = p_t / m_f

v_f_n = (3928 kg \* 9.3 m/s) / (2029
kg + 3928 kg)

`v_f_n = 6.1323 m/s`

## Total:

### Finding the velocity:

v_f_e = 4.4279 m/s
v_f_n = 6.1323 m/s

> We can also think of this as

v_x = 4.4279 m/s
v_y = 6.1323 m/s

> we can find the velocity by solving the triangle w/ Pythagorean:

v = sqrt(v_x^2 + v_y^2)

v = sqrt((4.4279 m/s)^2 + (6.1323
m/s)^2)

`v = 7.5638 m/s`

### Finding the angle

> we can use a bit of trig to find the angle

> use inverse tangent, since we know the opposite and adjacent sides, to find the interior angle.

> **you may need to check the sign and if it's offset by increments of 90deg and such, as a result of using trig, (many triangles have these side lengths, just all with different orientations)**

tan(theta) = o / a

theta = atan(o / a)

theta = atan(v_y / v_x)

theta = atan((6.1323 m/s) / (4.4279
m/s))

theta = 54.168 deg

> since it starts at the vertical and increases going clockwise (see the "LC6E Read Me!"), we'll need to fix our theta

theta = 90 deg - theta_i

theta = 90 deg - 54.168 deg

`theta = 35.832 deg`

## Final Solutions

`v = 7.5638 m/s`

`theta = 35.832 deg`

## Extended: Full Equations

> Using the above, we can generate an equation to get both answers from the provided numbers

#### Before we start, some notes:

> _note that non-positive compass headings (south, west) may require some tweaking before using the equations_

> _note that the angle equation may not work for all questions, but I hope you arent solving this way regardless so it shouldn't matter... right?_

### Velocity:

v = $\sqrt{\left(\frac{m_c \cdot v_c}{m_c + m_t }\right)^2 + \left(\frac{m_t \cdot v_t}{m_t + m_c }\right)^2}$

> Example:
> v = $\sqrt{\left(\frac{2029kg \cdot 13\frac{m}{s}}{2023kg + 3928kg }\right)^2 + \left(\frac{3928kg \cdot 9.3\frac{m}{s}}{3928kg + 2023kg }\right)^2}$
> v = $7.57149 \frac{m}{s}$

### Angle:

$\theta$ = $\arctan{\frac{\left( \frac{m_t \cdot v_t}{m_t + m_c }\right)}{\left(\frac{m_c \cdot v_c}{m_c + m_t }\right)}}$

> Example:
> $\theta$ = $\arctan{\frac{\left(\frac{2029kg \cdot 13\frac{m}{s}}{2023kg + 3928kg }\right)}{\left(\frac{3928kg \cdot 9.3\frac{m}{s}}{3928kg + 2023kg }\right)}}$ > $\theta$ = $35.83 \degree$
>
> corrections (may vary):
>
> - _none in this case_

# \*Lon Capa 6E | Question 2 | 2-D Explosion

> **Question:** Explosives are used to blow a rock apart. The explosion blows the rock into three fragments. Two fragments go off at a _111_ degree angle to each other--a _4.2_ kg piece at _21.4_ m/s and a _3.1_ kg piece at _32.8_ m/s. Calculate the speed of the third piece, if it has a mass of _4.3_ kg.
>
> $m_1$= 4.2 kg
> $v_1$ = 21.4 m/s
>
> $m_2$ = 3.1 kg
> $v_2$ = 32.8 m/s
>
> $m_3$ = 4.3 kg
>
> $\theta$ = 111 degrees

## Finding momentums(s)

### Core Concepts

> We're solving for: v_3. To do so, we'll rely on our previous knowledge that an explosion will result in a net momentum of 0 in every dimension (absent gravity et al)
>
> $$p = 0$$
> so we can apply this to the components of the magnitude to create two new equations

$$
\begin{aligned}
p_x =& \ 0 \\ p_y =& \ 0
\end{aligned}
$$

> keep these in mind, we'll be using them after finding the existing momentums!

### Finding existing fragment momentums: Fragment 1

> since we have no real idea of where this is in space, and it ultimately doesn't matter to the solution, we can call the direction of the first fragment the x-axis, and $\theta = 0$ (based on the unit circle)
>
> This makes this part fairly easy, since it only has one direction, but we'll set up both components just to be thorough

> Using the momentum equation:
> $p = m * v$
> we can create equations for the two. note that $\theta$ = 0, and $\sin(0) = 0$, so there is no y-component, or it is equal to 0, however you want to think about it

$$
\begin{aligned}
p_{1,x} =& \ v_1 * m_1 * \cos(\theta) \\ p_{1,y} =& \ v_1 * m_1 * \sin(\theta)
\end{aligned}
$$

> which at $\theta = 0$ just becomes

$$
\begin{aligned}
p_{1,x} =& \ v_1 * m_1
\\
p_{1,y} =& \ 0
\end{aligned}
$$

### Finding existing fragment momentums: Fragment 2

> We can use the equations from the previous question to rewrite write some equations for the second fragment, angled at an angle $\theta$ away from the first fragment. We can simply reuse the equations, however now $\theta$ is set equal to the value we are given in the problem

$$
\begin{aligned}
p_{2,x} =& \ v_2 * m_2 * \cos(\theta) \\ p_{2,y} =& \ v_2 * m_2 * \sin(\theta)
\end{aligned}
$$

### Combining existing fragments to find the third

> Note: I recommend calculating these values in-between steps to avoid having such long equations

> since we know

$$
\begin{aligned}
p_x =& \ 0 \\ p_y =& \ 0
> \\
> p_{direction} =& \sum{p_{direction, each}}\end{aligned}
$$

> we can create new equations and set them equal to their 0 values from before because of what we know about explosions and momentum

$$
\begin{aligned}
0 =& \ p_{1,x} + p_{2,x} + p_{3,x}
\\
 0 =& \ p_{1,y} + p_{2,y} + p_{3,y}
\end{aligned}
$$

> now we can substitute in our values from before

$$
\begin{aligned}
0 =& \ (v_1 * m_1 ) \ &+ \ (v_2 * m_2 * \cos(\theta)) \ +& \ p_{3, x}
\\
 0 =& \ 0 \ &+ \ (v_2 * m_2 * \sin(\theta)) \ +& \ p_{3, y}
\end{aligned}
$$

> now let's do a bit of expanding and isolate the $p_3$ values

$$
\begin{aligned}
m_3 * v_{3, x}& = -(v_1 * m_1 )  \ - &(v_2 * m_2 * \cos(\theta))
\\
m_3 * v_{3, y}& = &(v_2 * m_2 * \sin(\theta))
\end{aligned}
$$

> finally, let's isolate the velocities

$$
\begin{aligned}
v_{3, x}& = \frac{-(v_1 * m_1 ) -(v_2 * m_2 * \cos(\theta))}{m_3}
\\
v_{3, y}& = \frac{(v_2 * m_2 * \sin(\theta))}{m_3}
\end{aligned}
$$

> We can use the Pythagorean theorem to find speed from the two velocity components, substituting in the values that we

$$
\begin{aligned}
v_3 =& \ \sqrt{(v_{3,x})^2 + (v_{3,y})^2}
\\
v_3 =& \ \sqrt{\left(
\frac{-(v_1 * m_1 ) -(v_2 * m_2 * \cos(\theta))}{m_3}
\right)^2 + \left(\frac{(v_2 * m_2 * \sin(\theta))}{m_3}\right)^2}
\end{aligned}
$$

> That's all! your $v_3$ (which is really the magnitude of $v_3$) is the answer you just found above
>
> For my question: it was

$v_3$= `25.3337 m/s`

# Final Equations

> Note: Take these with a grain of salt, it's much better to follow along with the steps in sections above, and that way you'll yk.. learn, too!

$v_3 = \ \sqrt{\left(
\frac{-(v_1 * m_1 ) -(v_2 * m_2 * \cos(\theta))}{m_3}
\right)^2 + \left(\frac{v_2 * m_2 * \sin(\theta)}{m_3}\right)^2}$

# \*Lon Capa 6E | Question 3 | Collisions of Point Masses in Two Dimensions

> **Question:** A _6.30_ kg bowling ball moving at _9.30_ m/s in the +x-axis direction collides with a _0.950_ kg bowling pin, which is scattered at an angle of *80.0*° above the +x-axis and with a speed of _16.0_ m/s.
>
> 1. Calculate the magnitude of the final velocity of the bowling ball.
> 2. What is the kinetic energy before the collision?
> 3. What is the kinetic energy after the collision?
> 4. Is the collision elastic? (If not, discuss how spin on the ball might be converted to linear kinetic energy in the collision.)

> m_b = 6.3 kg
> v_b = 9.3 m/s
>
> theta = 80.0 degrees
>
> m_p = 0.95 kg
> v_p = 16.0 m/s

> additionally, for further use, the angle between the x-axis and the initial velocity of the bowling ball, going counterclockwise like in the unit circle:
>
> angle = 0.0 degrees

## Finding Momentum(s)

### The Pin:

> Finding initial momentum is easy, it is at rest, so in the equation
> p*direction = m * v \_ cos(theta)
> v is 0, so the entire equation = 0 N\*s

p_x = 0 Ns
p_y = 0 Ns

`p_p_x_i = 0 Ns`
`p_p_y_i = 0 Ns`

> Then we need to find the final momentum in 2-D of the pin

p*x = m_p * v*p * cos(theta)
p*y = m_p * v*p * sin(theta)

> For my values:

p*x = 0.95 kg * 16.0 m/s _ cos(80.0 degrees)
p_y = 0.95 kg _ 16.0 m/s \_ sin(80.0 degrees)

`p_p_x_f = 2.6395 Ns`
`p_p_y_f = 14.9690 Ns`

> We'll use these later w/ conservation of momentum

### The Bowling Ball

> For the bowling ball, the initial momentum is **not** 0, so we'll calculate it to use in the equation.

> Note: You may need to amend the equation / direction if your own problem does not feature the bowling ball going in the +x-axis direction
>
> I've used "_angle_" as the angle from the x-axis going counterclockwise, which in this case is 0. Ensure velocities are positive when using this method!

p*x = m_p * v*p * cos(angle)
p*y = m_p * v*p * sin(angle)

> For my values:

p*x = 6.3 kg * 9.3 m/s _ cos(0 degrees)
p_y = 6.3 kg _ 9.3 m/s \_ sin(0 degrees)

`p_b_x_i = 58.59 Ns`
`p_b_y_i = 0 Ns`

## Using momentum to solve

> From these values, we can use the concept of conservation of momentum to find the bowling ball's final velocity and direction

p_i = p_f

> In two dimensions, this becomes two equations:

p_x_i = p_x_f
p_y_i = p_y_f

> The net momentums are based on the combined momentums, within the context of this problem: the bowling ball and pin. Thus the equations become:

p_b_x_i + p_p_x_i = p_b_x_f + p_p_x_f
p_b_y_i + p_p_y_i = p_b_y_f + p_p_y_f

> We know the initial momentums of the ball and pin, and the final of the pin, so we can rearrange to solve for what we want, the final momentums of the ball

p_b_x_i + p_p_x_i - p_p_x_f = p_b_x_f
p_b_y_i + p_p_y_i - p_p_y_f = p_b_y_f

> or in other words

p_b_x_f = p_b_x_i + p_p_x_i - p_p_x_f
p_b_y_f = p_b_y_i + p_p_y_i - p_p_y_f

> then expand, allowing us to isolate the unknowns

v*b_x_f * m*b = p_b_x_i + p_p_x_i - p_p_x_f
v_b_y_f * m_b = p_b_y_i + p_p_y_i - p_p_y_f

v_b_x_f = (p_b_x_i + p_p_x_i - p_p_x_f) / m_b
v_b_y_f = (p_b_y_i + p_p_y_i - p_p_y_f) / m_b

> but what we really want is the magnitude of the final velocity, not its components, so we can use the Pythagorean theorem to solve for v

v_b_f = sqrt( (v_b_x_f)^2 + (v_b_y_f)^2 )
v_b_f = sqrt( ((p_b_x_i + p_p_x_i - p_p_x_f) / m_b)^2 + ((p_b_y_i + p_p_y_i - p_p_y_f) / m_b)^2 )

> a bit more nicely, that's

$v_{b,f}$ = $\sqrt{ (v_{b,x,f})^2 + (v_{b,y,f})^2 }$

$v_{b,f}$ = $\sqrt{ \left( \frac{p_{b,x,i} + p_{p,x,i} - p_{p,x,f}}{m_b} \right)^2 + \left( \frac{p_{b,y,i} + p_{p,y,i} - p_{p,y,f}}{m_b} \right)^2 }$

> If we really want to make this a one-line process, we can do:

$v_{b,f} = \sqrt{ \left( \frac{(m_b * v_b * cos(angle)) + 0 - (m_p *  v_p * cos(\theta))}{m_b} \right)^2 + \left( \frac{(m_b * v_b * sin(angle)) + 0 - (m_p *  v_p * sin(\theta))}{m_b} \right)^2 }$

> We can then plug in our values found in previous steps.
> For my numbers, that would be:

$v_{b,f} =  \sqrt{ \left( \frac{(6.3\,\cdot\,9.3\,\cdot\,cos(0)) + 0 - (0.95\,\cdot\,16.0\,\cdot\,cos(80))}{6.3} \right)^2 + \left( \frac{(6.3\,\cdot\,9.3\,\cdot\,sin(0)) + 0 - (0.95\,\cdot\,16.0\,\cdot\,sin(80))}{6.3} \right)^2 }$

`v_b_f = 9.19339 m/s`

## Finding the Angle

> we can use some trig to find the angle based on the x and y components

$\sin{\theta} = \frac{opposite}{adjacent}$

$\sin{\theta} = \frac{v_{b,y,f} }{ v_{b,x,f}}$

$\theta = \sin^{-1}{\frac{v_{b,y,f} }{ v_{b,x,f}}}$

$\theta = \sin^{-1}{\frac{v_{b,y,f} }{ v_{b,x,f}}}$

> Using the equations from the previous part (which can be found in the final equations section as well):

$v_{b,x,f} = \frac{(m_b * v_b * cos(angle)) - (m_p *  v_p * cos(\theta))}{m_b}$

$v_{b,y,f} = \frac{(m_b * v_b * sin(angle)) - (m_p *  v_p * sin(\theta))}{m_b}$

> we can plug these into the equation above to get

$\theta = \sin^{-1}{\frac{\frac{(m_b\,\cdot\,v_b\,\cdot\,sin(angle)) - (m_p\,\cdot\, v_p\,\cdot\,sin(\theta))}{m_b}}{\frac{(m_b\,\cdot\,v_b\,\cdot\,cos(angle)) - (m_p\,\cdot\, v_p\,\cdot\,cos(\theta))}{m_b}}}$

> slightly more neatly that's

$\theta = \sin^{-1}{\frac{m_b\,\cdot\,v_b\,\cdot\,sin(angle) \,-\, m_p\,\cdot\, v_p\,\cdot\,sin(\theta)}{m_b\,\cdot\,v_b\,\cdot\,cos(angle) \,-\, m_p\,\cdot\, v_p\,\cdot\,cos(\theta)}}$

> for my question:

$\theta = \sin^{-1}{\frac{6.3\,\cdot\,9.3\,\cdot\,\sin(0) - 0.95\,\cdot\,16.0\,\cdot\,\sin\left(\frac{80\,\cdot\,\pi}{180}\right)}{6.3\,\cdot\,9.3\,\cdot\,\cos(0) - 0.95\,\cdot\,16.0\,\cdot\,\cos\left(\frac{80\,\cdot\,\pi}{180}\right)}}$

`theta = -14.9 deg`

## Finding Kinetic Energy (Before)

> To find net kinetic energy, we find the sum of

$K$ = $\sum{\frac{1}{2} \cdot m \cdot v^2}$

$K_i$ = $K_{b,i} + K_{p,i}$

$K_i$ = $\frac{1}{2} \cdot \left( 
m_{b} \cdot (v_{b,i})^2 + m_{p} \cdot (v_{p,i})^2
\right)$

> For my numbers:

$K_i$ = $\frac{1}{2} \cdot \left( 6.3 \cdot (9.3)^2 + 0.95 \cdot (0)^2\right)$

$K_i$ = `272.4435 J`

## Finding Kinetic Energy (After)

$K_f$ = $\sum{\frac{1}{2} \cdot m \cdot v^2}$

$K_f$ = $\frac{1}{2} \cdot \left( 
m_{b} \cdot (v_{b,f})^2 + m_{p} \cdot (v_{p})^2
\right)$

> now we can substitute in that long equation for $v_{b,f}$
> the square and sqrt reduce out!

$K_f$ = $\frac{1}{2} \cdot \left( 
m_{b} \cdot \left(
 \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,cos(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,cos(\theta))}{m_b} \right)^2 + \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,sin(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,sin(\theta))}{m_b} \right)^2
\right) + m_{p} \cdot (v_{p})^2
\right)$

> For my numbers:

$K_i$ = $\frac{1}{2} \cdot \left( 6.3 \cdot \left(\left( \frac{(6.3\,\cdot\,9.3\,\cdot\,cos(0)) + 0 - (0.95\,\cdot\,16.0\,\cdot\,\cos{\frac{80\,\cdot\,\pi}{180}})}{6.3} \right)^2 + \left( \frac{(6.3\,\cdot\,9.3\,\cdot\,sin(0)) + 0 - (0.95\,\cdot\,16.0\,\cdot\,\sin{\frac{80\,\cdot\,\pi}{180}})}{6.3} \right)^2\right) + 0.95 \cdot (16)^2\right)$

$K_f$ = `387.6367 J`

### Is it elastic?

> Based on what we know about elasticity, the answer is the same as it would be to
> "_Was kinetic energy conserved?_"

> In my problem:
> Answer: **`No`**

# Final Equations

> Note: Take these with a grain of salt, it's much better to follow along with the steps in sections above, and that way you'll yk.. learn, too!

## General / Reused

> velocity (given that the pin starts at rest, otherwise follow the directions to derive again)

$v_{b,x,f} = \frac{(m_b\,\cdot\,v_b\,\cdot\,cos(angle)) - (m_p\,\cdot\, v_p\,\cdot\,cos(\theta))}{m_b}$

$v_{b,y,f} = \frac{(m_b\,\cdot\,v_b\,\cdot\,sin(angle)) - (m_p\,\cdot\, v_p\,\cdot\,sin(\theta))}{m_b}$

## Submitted

$v_{b,f} = \sqrt{ \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,cos(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,cos(\theta))}{m_b} \right)^2 + \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,sin(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,sin(\theta))}{m_b} \right)^2 }$

$\theta = \sin^{-1}{\frac{m_b\,\cdot\,v_b\,\cdot\,sin(angle) \,-\, m_p\,\cdot\, v_p\,\cdot\,sin(\theta)}{m_b\,\cdot\,v_b\,\cdot\,cos(angle) \,-\, m_p\,\cdot\, v_p\,\cdot\,cos(\theta)}}$

$K_i$ = $\frac{1}{2} \cdot \left( 
m_{b} \cdot (v_{b,i})^2 + m_{p} \cdot (v_{p,i})^2
\right)$

$K_f$ = $\frac{1}{2} \cdot \left( 
m_{b} \cdot \left(
 \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,cos(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,cos(\theta))}{m_b} \right)^2 + \left( \frac{(m_b\,\cdot\,v_b\,\cdot\,sin(angle)) + 0 - (m_p\,\cdot\, v_p\,\cdot\,sin(\theta))}{m_b} \right)^2
\right) + m_{p} \cdot (v_{p})^2
\right)$
