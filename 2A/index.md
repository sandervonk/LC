# Lon Capa 2A - Guided Practice

## Q1: Racecar Qualifying
### Question:
> In order to qualify for the finals in a racing event, a race car must achieve an average speed of $252 \frac{\text{km}}{\text{hr}}$ on a track with a total length of $1600.0 \text{m}$. If a particular car covers the first half of the track at an average speed of  $225.1 \frac{\text{km}}{\text{hr}}$, what minimum average speed must it have in the second half of the event in order to qualify? (in $\frac{\text{km}}{\text{hr}}$)

### Variable Breakdown
> $\begin{aligned}
&\bar v &= \ & 252 \ \frac{\text{km}}{\text{hr}} \\
&\Delta{x} &= \ & 1600 \ \text{m} \\
&v_{first} &= \ & 225.1 \ \frac{\text{km}}{\text{hr}} \\
&v_{last} &= \ & ? \ \frac{\text{km}}{\text{hr}} \\
\end{aligned}$

### Steps / Summary

#### Approach 1: Definition of velocity ($\bar v$)
First, we can use the equation for average velocity to find what values we'll need to solve the for the answer:
> $\bar v = \frac{\Delta x}{t}$
>>
> $\bar v = \frac{\Delta x}{t_{first} + t_{last}}$
>>
> $t_{first} + t_{last} = \frac{\Delta x}{\bar v}$
>>
> $t_{last} = \frac{\Delta x}{\bar v} - t_{first}$

And use that in the velocity equation to find $v_{last}$:
> $v = \frac{\Delta x}{t}$
> >
> $v_{last} = \frac{\Delta x_{last}}{t_{last}}$
> >
> $v_{last} = \frac{\frac{\Delta x}{2}}{t_{last}}$

And substitute in the $t_{last}$ we found:
> $v_{last} = \frac{\frac{\Delta x}{2}}{t_{last}}$
> >
> $v_{last} = \frac{\frac{\Delta x}{2}}{\frac{\Delta x}{\bar v} - t_{first}}$
> >
> $v_{last} = \frac{\Delta x}{2*\left(\frac{\Delta x}{\bar v} - t_{first}\right)}$

Now that we know we need to find $t_{first}$, we can do so using the same average velocity equation ($\bar v$) that we started with
> $\bar v = \frac{\Delta x}{t}$
> >
> $\bar v_{first} = \frac{\Delta x_{first}}{t_{first}}$
> >
> $t_{first} = \frac{\Delta x_{first}}{\bar v_{first}}$
> >
> $t_{first} = \frac{\frac{\Delta x}{2}}{\bar v_{first}}$
> >
> $t_{first} = \frac{\Delta x}{2 * \bar v_{first}}$

which we can substitute into our $v_{last}$ equation:
> $v_{last} = \frac{\Delta x}{2*\left(\frac{\Delta x}{\bar v} - t_{first} \right)}$
> >
> $v_{last} = \frac{\Delta x}{2*\left(\frac{\Delta x}{\bar v} - \frac{\Delta x}{2 * \bar v_{first}} \right)}$
> >
> $v_{last} = \frac{\Delta x}{2 * \Delta x * \left(\frac{1}{\bar v} - \frac{1}{2 * \bar v_{first}} \right)}$
> >
> $v_{last} = \frac{1}{2 * \left(\frac{1}{\bar v} - \frac{1}{2 * \bar v_{first}} \right)}$

Then just plug in to solve!

For my example problem that'd work out to:
> $v_{last} = \frac{1}{2 * \left(\frac{1}{252 \ \frac{\text{km}}{\text{hr}}} - \frac{1}{2 * 225.1 \ \frac{\text{km}}{\text{hr}}} \right)}$
> >
> $v_{last} = 286.202 \ \frac{\text{km}}{\text{hr}}$

Giving me a final solution of `286 km/hr`

#### Approach 2: Weighted Velocity Average [INCOMPLETE]
To solve this question, we can use the equation for weighted average velocity $\bar v$, then solve for the unknown $v_{last}$
$$\begin{aligned}
  \bar v &= \sum_{n=1}^{\text{parts}}{\left( v_{part} * t_{part} \right)} \\
  \bar v &= \left( v_{first} * t_{first} \right) + \left( v_{last} * t_{last} \right) \\
\bar v &= \left( v_{first} * 0.5 \ \text{} \right) + \left( v_{last} * 0.5 \right) \\
\bar v &= 0.5 * \left( v_{first} + v_{last} \right) \\
2 *\bar v &= v_{first} + v_{last} \\
v_{last} &= v_{first} - 2 *\bar v \\
\end{aligned}$$
Which for my example problem would work out to:
> $v_{last} = v_{first} - 2 *\bar v$
> >
> . . . 

**Work In Progress**: This isn't finished, and might never be, the first way is much, _much_, better

## Q2: Imperial Car Speed
### Question:
> The total distance treaveled by a car moving in a straight line is as follows: 
> - After the first $7.0 \ \text{min}$ it has gone a total of $2.0 \ \text{mi}$. 
> - After $14.0 \ \text{min}$ it has traveled a total of $4.5 \ \text{mi}$. 
> - After $21.0 \ \text{min}$ it has traveled a total of $6.0 \ \text{mi}$. 

> Find the average speed at: 
> - Time = $7.0 \ \text{min}$ (in $\frac{\text{mi}}{\text{hr}}$) 
> - Time = $14.0 \ \text{min}$ (in $\frac{\text{mi}}{\text{hr}}$) 
> - Time = $21.0 \ \text{min}$ (in $\frac{\text{mi}}{\text{hr}}$)

### Variable Breakdown
> $t_1 = 7.0 \ \text{min}$
> >
> $d_1 = 2.0 \ \text{mi}$

> $t_2 = 14.0 \ \text{min}$
> >
> $d_2 = 4.5 \ \text{mi}$

> $t_3 = 21.0 \ \text{min}$
> >
> $d_3 = 6.0 \ \text{mi}$

Please note that in this case $d$ represents distance, not displacement. Distance is _total distance traveled_, also represented by:
$\int_{t_0}^{t_f}{|dx|}$ or $\int_{t_0}^{t_f}{|\Delta x|}$, though knowing what that means is not necessary to completing the problem.

We'll also be using $v$ to denote speed. Though semantially it is more correct to use a italic _v_ for speed, and a boldface **v** for velocity, it's hard to make that distinction with the current TeX system I'm using :(

### Steps / Summary
#### Setup
To find the average speed $\bar v$ of an object travelling a distance $d$ over a time $t$, we can use the equation:
> $\bar v = \frac{d}{t}$

Applied to this question, the process is fairly simple:
> $\bar v_n = \frac{d_n}{t_n}$

Solutions using this method can be found below for the timesteps $t_1$, $t_2$, and $t_3$.
 
#### At the timestep $t = t_1$
> $\bar v_1 = \frac{d_1}{t_1}$

Which for my example problem evaluates to:
> $\bar v_1 = \frac{2.0 \ \text{mi}}{7.0 \ \text{min}}* \frac{60 \ \text{min}}{1 \ \text{hr}}$
> >
> $\bar v_1 = 17.143 \ \frac{\text{mi}}{\text{hr}}$

#### At the timestep $t = t_2$
> $\bar v_1 = \frac{d_2}{t_2}$

Which for my example problem evaluates to:
> $\bar v_2 = \frac{4.5 \ \text{mi}}{14.0 \ \text{min}}* \frac{60 \ \text{min}}{1 \ \text{hr}}$
> >
> $\bar v_2 = 19.286 \ \frac{\text{mi}}{\text{hr}}$

#### At the timestep $t = t_3$
> $\bar v_3 = \frac{d_3}{t_3}$

Which for my example problem evaluates to:
> $\bar v_3 = \frac{6.0 \ \text{mi}}{21.0 \ \text{min}}* \frac{60 \ \text{min}}{1 \ \text{hr}}$
> >
> $\bar v_3 = 17.143 \ \frac{\text{mi}}{\text{hr}}$

**This page is still a work in progress, please be patient :)**

## Other Tidbits
### Conversion
#### km/hr -> m/s
$$\begin{aligned}
\left(
\frac{1000 \ \text{m}}{1 \ \text{km}} *
  \frac{1 \ \text{hr}}{60 \ \text{min}} *
  \frac{1 \ \text{min}}{60 \ \text{s}} 
\right)
  &=
\frac{1000 \ \text{m*hr}}{3600 \ \text{km*s}}
  \\ &= 
\frac{5}{18} \ \frac{\text{m*hr}}{\text{km*s}}
  \\ &\approx
0.2778 \ \frac{\text{m*hr}}{\text{km*s}}
\end{aligned}$$
