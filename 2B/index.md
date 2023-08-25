# Lon Capa 2B - Guided Solutions

## Q2: Weather Balloon

### Question:

> A weather balloon is floating at a constant height above the Earth when it releases a pack of instruments.
>
> - If the pack hits the ground with a speed of $55 \, \frac{\text m}{\text s}$, how high is the balloon? (in $\text m$)
> - How long does it take the instrument pack to hit the ground? (in $\text s$)

### Variable Breakdown

> $v_f = -55 \, \frac{\text m}{\text s}$

> $g = 9.81 \, \frac{\text m}{\text s^2}$
>
> > $a_g = -g$

### Steps / Summary

#### Part 1: Distance Travelled

To solve this equation, we can set up an equation using the definition of average velocity:

$\bar v = \frac{d}{t}$

then solve for displacement

$d = \bar v * t$

and work out our average velocity

$d = \frac{v_f + v_i}{2} * t$

$d = \frac{v_f}{2} * t$

for the time, we can just solve the equation for acceleration for time:

$a = \frac{\Delta v}{t}$

$t = \frac{v_f - v_i}{a_g}$

$t = \frac{v_f}{a_g}$

now, we just combine the two equations:

$d = \frac{v_f}{2} * \frac{v_f}{a_g}$

$d = \frac{\left(v_f\right)^2}{2a_g}$

and solve for the displacement.

For my example problem, that'll look like:

> $d = \frac{\left(v_f\right)^2}{2a_g}$
>
> > $d = \frac{\left(-55 \, \frac{\text m}{\text s}\right)^2}{2 * -9.81 \, \frac{\text m}{\text s ^2}}$
> >
> > $d = \frac{\left(-55\right)^2}{-19.62} \, \text m$
> >
> > $d = \frac{\left(55\right)^2}{-19.62} \, \text m$
> >
> > $d = 154.18 \, \text m$

Giving me a final solution of `154.18 m`

#### Part 2: Time falling

For this part, we simply reuse the equation for $t$ we found earlier:

$t = \frac{v_f}{a_g}$

For my example problem, this would look like:

> $t = \frac{v_f}{a_g}$
>
> > $t = \frac{-55 \, \frac{\text m}{\text s}}{-9.81 \, \frac{\text m}{\text s^2}}$
> >
> > $t = \frac{-55 \, \frac{\text m}{\text s}}{-9.81 \, \frac{\text m}{\text s^2}}$
> >
> > $t = 5.607 \, \text s$

Giving me a final solution of `5.607 s` for this part

## Q2: Accelerating Car

### Question:

> A car traveling at a speed of $15.2 \, \frac{\text m}{\text s}$ is accelerated uniformly at the rate of $2.57 \, \frac{\text m}{\text s^2}$ over a $11.5 \, \text s$ period of time. What is its final speed? (in $\frac{\text m}{\text s}$)

### Variable Breakdown

> $v_0 = 15.2 \, \frac{\text m}{\text s}$

> $a = 2.57 \, \frac{\text m}{\text s^2}$

> $\Delta t = 11.5 \, \text s$

### Steps / Summary

To solve this problem, we simply use the equation for velocity with an applied acceleration:

$v_f = v_0 + a * \Delta t$

All we need to do is plug in our numbers!

For my example problem, this works out to:

> $v_f = v_0 + a * \Delta t$
>
> > $v_f = 15.2 \, \frac{\text m}{\text s} + 2.57 \, \frac{\text m}{\text s^2} * 11.5 \, \text s$
> >
> > $v_f = 44.755 \, \frac{\text m}{\text s}$

Giving me a final solution of `44.755 m/s`

## Q3: Falling Icicle

### Question:

> An icicle falls from an electric line. It takes $2.46 \, \text s$ to reach the ground.
>
> - Ignoring air resistance, how far did the icicle fall? (in $\text m$)
> - What was the icicle's final velocity just before it struck the ground? (in $\frac{\text m}{\text s}$)

### Variable Breakdown

> $\Delta t = 2.46 \, \text s$

> $g = 9.8 \, \frac{\text m}{\text s^2}$
>
> > $a_g = -g$

### Steps / Summary

#### Part 1: Fall Height

To find the height from which it fell, we can use the equation:

$d = v_0 * t + \frac{1}{2} * a * {\Delta t}^2$

$d = v_0 * t + \frac{1}{2} * a_g * {\Delta t}^2$

Which when modified to reflect that the icicle had $0$ initial velocity is:

$d = \frac{1}{2} * a_g * {\Delta t}^2$

$d = {\Delta t}^2 * -4.9 \frac{\text m}{\text s^2}$

Which for my example problem equates to:

> $d = {\Delta t}^2 * -4.9 \frac{\text m}{\text s^2}$
>
> > $d = {\left( 2.46 \, \text s \right)}^2 * -4.9 \frac{\text m}{\text s^2}$
> >
> > $d = -29.653 \, \text m$
> >
> > $y_i = y_f - d$
> >
> > $y_i = 0 \, \text m - d$
> >
> > $y_i = 29.653 \, \text m$

Giving me a final solution of `29.653 m`

#### Part 2: Final Velocity

It's even simpler to find the final velocity, which we can find using the initial velocity and acceleration $*$ time:

$v_f = v_i + a * \Delta t$

$v_f = 0 \, \frac{\text m}{\text s} - \Delta t * 9.8 \, \frac{\text m}{\text s^2}$

$v_f = - \Delta t * 9.8 \, \frac{\text m}{\text s^2}$

For my example problem, this would work out to:

> $v_f = - 2.46 \, \text s * 9.8 \, \frac{\text m}{\text s^2}$
>
> > $v_f = - 24.108 \, \frac{\text m}{\text s}$
> >
> > $|v_f| = 24.108 \, \frac{\text m}{\text s}$

Giving me a final solution of `24.108 m/s`

## Q4: Automobile Acceleration

### Question:

> An automobile started from $0.86 \, \frac{\text m}{\text s}$ and underwent constant acceleration of $1.22 \, \frac{\text m}{\text s^2}$ until it was traveling $24.6 \, \frac{\text m}{\text s}$. How many seconds did it take the automobile to reach this speed? (in $\text s$)

### Variable Breakdown

> $v_i = 0.86 \, \frac{\text m}{\text s}$
>
> > $v_f = 24.6 \, \frac{\text m}{\text s}$

> $a = 1.22 \, \frac{\text m}{\text s^2}$

### Steps / Summary

To solve, we can use the definition of acceleration:

$a = \frac{\Delta v}{\Delta t}$

$\Delta t = \frac{v_f - v_i}{a}$

Which for my example problem would work out to:

> $\Delta t = \frac{v_f - v_i}{a}$
>
> > $\Delta t = \frac{24.6 \, \frac{\text m}{\text s} - 0.86 \, \frac{\text m}{\text s}}{1.22 \, \frac{\text m}{\text s^2}}$
> >
> > $\Delta t =  19.459 \, \text s$

Giving me a final solution of `19.459 s`

## Q5: Speed Trap

### Question:

> A speed trap is set up with two pressure activated strips placed across a highway, $114 \, \text m$ apart. A car is speeding along at $31.6 \, \frac{\text m}{\text s}$, while the speed limit is only $19.2 \, \frac{\text m}{\text s}$. At the instant the car activates the first strip, the driver begins slowing down. What minimum deceleration (magnitude only) is needed so that the driver's average speed is within the limit by the time the car crosses the second strip? (in $\frac{\text m}{\text s^2}$)

### Variable Breakdown

> $\Delta x = 114 \, \text m$

> $v_i = 31.6 \, \frac{\text m}{\text s}$
>
> > $\bar v = 19.2 \, \frac{\text m}{\text s}$

### Steps / Summary

#### Finding the final velocity

In order to not be registered as speeding, the average velocity needs to be $\bar v$, meaning that:

$\bar v = \frac{v_i + v_f}{2}$

$2\bar v = v_i + v_f$

$v_f = 2\bar v - v_i$

Gives us the final velocity $v_f$ that we need to reach.

#### Finding the magnitude of deceleration

To find the deceleration, we can use the equation:

${v_f}^2 = {v_i}^2 + 2 * a * {\Delta x}$

And solve for the magnitude of deceleration $|a|$:

$|a| = |\frac{{v_f}^2 - {v_i}^2} {2 * {\Delta x}}|$

substituting in the $v_f$ we found earlier to get:

$|a| = |\frac{{\left(
	2\bar v - v_i
\right)}^2 - {v_i}^2} {2 * {\Delta x}}|$

For my example problem, this works out to:

> $|a| = |\frac{{\left(

    2\bar v - v_i

\right)}^2 - {v_i}^2} {2 \* {\Delta x}}|$

> > $|a| = |\frac{
> > \left(

    2 * 19.2 \, \frac{\text m}{\text s} -
    31.6 \, \frac{\text m}{\text s}

\right)^2 -
\left(
31.6 \, \frac{\text m}{\text s}
\right)^2}
{2 \* {114 \, \text m}}|$

> > $|a| = 4.177 \, \frac{\text m}{\text s^2}$

Giving me a final solution of `4.177 m/s^2`
