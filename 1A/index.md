# Lon Capa 1a
## Q1: Vector - Components
### Question:
> The components of a vector $\vec{V}$ are often written as ($V_x$, $V_y$, $V_z$). What is the y component of a vector which is the sum of the two vectors, $\vec{V_1}$ and $\vec{V_2}$, whose components are (3.09, 1.83, 0.00) and (3.66, -4.49, -2.73)?
> >
> Calculate the length of the sum of [(V)\vec]1 and [(V)\vec]2.

### Variable Breakdown
> $\vec{V_1} = (3.09, 1.83, 0.00)$
>>
> $\vec{V_2} = (3.66, -4.49, -2.73)$

### Steps / Summary
#### Part 1: finding a component
To combine these two vectors, we simply add their directional magnitude scalar components:

> $\vec{V_{sum}} = \vec{V_{1+2}}$
> > 
> $\vec{V_{sum}} = (V_{(1+2),x}, V_{(1+2)y}, V_{(1+2),z})$
> >
> $\vec{V_{sum}} = (V_{1,x} + V_{2,x}, V_{1,y} + V_{2,y}, V_{1,z} + V_{2,z})$

Though we won't need all these components for the start of this question, it's worth doing a little more work to make sure we understand it!

For my variation / numbers, I'll get a $\vec{V_{sum}}$ of:
> $\vec{V_{sum}} = (3.09 + 3.66, 1.83 + -4.49, 0.00 + -2.73)$
> >
>  $\vec{V_{sum}} = (6.75, -2.66, -2.73)$

Since my example prompt asks for the y-component, i'll enter `-2.66`

#### Part 2: Finding vector length
To find the length of the sum vector $\vec{V_{sum}}$ we found, we can use the Pythagorean theorem in three dimensions:
> $d = \sqrt{\left( \Delta x \right)^2 + \left( \Delta y \right)^2 + \left( \Delta z \right)^2}$

For a vector, this will work out to be:
> $d = \sqrt{\left( \vec{V_x} \right)^2 + \left( \vec{V_y} \right)^2 + \left( \vec{V_z} \right)^2}$

or more technically:
> $d = \sqrt{\left( \vec{V_{sum,x}} \right)^2 + \left( \vec{V_{sum,y}} \right)^2 + \left( \vec{V_{sum,z}} \right)^2}$

For my example, this would be 
> $d = \sqrt{(6.75)^2 + (-2.66)^2 + (-2.73)^2}$
> >
> $d = 7.75$

For a final solution of `7.75`

## Q2: Vector - Magnitude
### Question:
> If $V_x$ = 19.00 units and $V_y$ = -15.10 units, determine the magnitude of $\vec{V}$.
>>
> Determine the angle of $\vec{V}$ with respect to the x-axis.
(in deg) 
### Variable Breakdown
> $\vec{V_x} = 19.00$
>>
> $\vec{V_y} = -15.10$

### Steps / Summary

#### Part 1: Magnitude

We can use the Pythagorean theorem to solve for the magnitude:
> $a^2 + b^2 = c^2$
> >
> $\left(V_x\right)^2 +\left(V_y\right)^2 = V^2 = |\vec{V}|^2$
>>
> $|\vec{V}|^2 = \left(V_x\right)^2 +\left(V_y\right)^2$
> >
> $|\vec{V}| = \sqrt{\left(V_x\right)^2 +\left(V_y\right)^2}$

With the numbers from my example, that would be:
> $|\vec{V}| = \sqrt{\left(19.00\right)^2 +\left(-15.10\right)^2}$
> >
> $|\vec{V}| = 24.27$

Giving me a solution for this part of `24.27`

#### Part 2: Angle
To find the angle of $\vec{V_{sum}}$ relative to the x-axis, we can do a bit of sohcahtoa
> note that for different $V_x$ and $V_y$ values you may have to adjust the calculated angle in order to account for the bounds of the inverse trigonometric functions. If this is the case, your new angle should be a multiple of 90 degrees off from your calculations.
> >
> You may use the image below as reference:
> ![trigonometric relationships diagram](https://www.softschools.com/math/pre_calculus/images/direction_angles_of_vectors_1.png)

Using the diagram above, we can conclude that to find the angle $\theta$, we may use the relationship:
> $\tan{\theta} =  \frac{\text{opposite}}{\text{adjacent}}$
> >
> $\theta = \tan{\left( \frac{\text{opposite}}{\text{adjacent}} \right)}^{-1}$

Which can be adapted to fit our vector scalar values:
> $\theta = \tan{\left( \frac{V_y}{V_x} \right)}^{-1}$

Which for my example numbers works out to:
> $\theta = \tan{\left( \frac{-15.10}{19.00} \right)}^{-1}$
> >
> $\theta = -38.48 \ \text{deg}$

This is already in quadrant 4 (positive $V_x$, negative $V_y$), and thus needs no adjustment.

The solution in my case is thus: `-38.48 deg`

## Q3: 2D Kinematics - Displacement
### Question:
> A delivery truck travels 11 km north, 19 km east, and 28 km south. What is its final displacement from the origin?
(in km)
>>
> What is the angle of the final displacement relative to the east?

### Variable Breakdown
> $V_x = 11 \ \text{km} + -28 \ \text{km}$
> >
> $V_x = -17 \ \text{km}$
> >
> $V_y = 19 \ \text{km} + 0 \ \text{km}$
> >
> $V_y = 19 \ \text{km}$

### Steps / Summary
Keeping in mind the following relationships of compass headings to axes and signs, add together the components for your $V_x$ and $V_y$, as shown in the **Variable Breakdown** above:
> North $\rightarrow$ $+V_y$
> >
> South $\rightarrow$ $-V_y$
> >
> East $\rightarrow$ $+V_x$
> >
> West $\rightarrow$ $-V_x$

Now that you have your $V_x$ and $V_y$, we can begin to solve the problem.

#### Part 1: Distance (position vector magnitude)
To find the final displacement, we're just finding the distance travelled, which is the length/magnitude $|\vec{V}|$.

Just like in previous problems, we can find the magnitude from the $V_x$ and $V_y$ components using the Pythagorean theorem (though this time just in two dimensions)

Adapting the Pythagorean theorem for vector magnitude:
> $a^2 + b^2 = c^2$
> >
> $\left(V_x\right)^2 +\left(V_y\right)^2 = V^2 = |\vec{V}|^2$
>>
> $|\vec{V}|^2 = \left(V_x\right)^2 +\left(V_y\right)^2$
> >
> $|\vec{V}| = \sqrt{\left(V_x\right)^2 +\left(V_y\right)^2}$

With the numbers from my example, that would be:
> $|\vec{V}| = \sqrt{\left(-17 \ \text{km}\right)^2 +\left(19 \ \text{km}\right)^2}$
> >
> $|\vec{V}| = 25.50 \ \text{km}$

Giving me a solution for this part of `25.50 km`

#### Part 2: Angle
To again find the angle of the final displacement, we can use the same process as Part 2 of Q2: trigonometrically

Reusing the equation:
> $\theta = \tan{\left( \frac{V_y}{V_x} \right)}^{-1}$

For my example scalar $V_x$ and $V_y$ components:
> $\theta = \tan{\left( \frac{-17 \ \text{km}}{19 \ \text{km}} \right)}^{-1}$
> >
> $\theta = -41.82 \ \text{deg}$

We can again check that this is in the correct quadrant.
a positive $V_x$ and negative $V_y$ should land us in the forth quadrant, which lines up again with our result being in the range $\left( -90 \ \text{deg} \le \theta \le 0 \ \text{deg} \right)$

This means that the final answer in my case is simply `-41.82 deg`

