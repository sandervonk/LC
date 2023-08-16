# Lon Capa 1A - Guided Practice
## Q1: Vector - Components
### Question:
> The components of a vector $\vec{V}$ are often written as ($V_x$, $V_y$, $V_z$). What is the y component of a vector which is the sum of the two vectors, $\vec{V_1}$ and $\vec{V_2}$, whose components are (3.09, 1.83, 0.00) and (3.66, -4.49, -2.73)?
> >
> Calculate the length of the sum of [$\vec{V_1}$ and $\vec{V_2}$.

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
> >
> ![trigonometric relationships diagram](https://www.softschools.com/math/pre_calculus/images/direction_angles_of_vectors_1.png)

Using the diagram above, we can conclude that to find the angle $\theta$, we may use the relationship:
> $\tan{\theta} =  \frac{\text{opposite}}{\text{adjacent}}$
> >
> $\theta = \tan^{-1}{\left( \frac{\text{opposite}}{\text{adjacent}} \right)}$

Which can be adapted to fit our vector scalar values:
> $\theta = \tan^{-1}{\left( \frac{V_y}{V_x} \right)}$

Which for my example numbers works out to:
> $\theta = \tan^{-1}{\left( \frac{-15.10}{19.00} \right)}$
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

## Q4: Vector Sum

### Question
> The figure below shows three vectors of lengths $|\vec{A}| = 67.2$, $|\vec{B}| = 38.4$, and $|\vec{C}| = 44.9$. The angles are $\theta_a = 28.9°$ and $\theta_b = 55.6°$, and $\vec{C}$ points along the negative y-axis. 
> >
> Determine the length of the vector A - C.
> >
> Calculate the angle of this vector.
> >
> ![Question Vector Diagram](https://i.ibb.co/MfXQTkQ/gian0333.gif)
### Variable Breakdown
> $|\vec{A}| = 67.2$
> >
> $|\vec{B}| = 38.4$
> >
> $|\vec{C}| = 44.9$. 
> >
> $\theta_a = 28.9°$
> >
> $\theta_b = 55.6°$,
> > 
> $\vec{C}$ points along the negative y-axis. 
> Thus:
> >
>  $\theta_c = -90°$,

### Steps / Solution
#### Part 1: Vector Sum & Length
To find the difference $\vec{V_{diff}}$ of the two vectors $\vec{A}$ and $\vec{B}$, we can subtract the individual components:

$\vec{V_{diff}} \ = \ <V_{diff,x}, \ V_{diff,y}>$

$V_{diff,x} \ = \ A_x - C_x$

$V_{diff,y} \ = \ A_y - C_y$

$\vec{V_{diff}} \ = \ <A_x - C_x, \ A_y - C_y>$

This is cool and all, but doesn't really tell us anything -- we don't know the scalar values of each $A_x$, $A_y$, etc.

To find these, we'll again use some trigonometry, or, for the sake of simplicity, the vector rules derived therefrom:
> $V_x \ = \ |\vec{V}| \cdot \cos{\theta}$
> >
> $V_y \ = \ |\vec{V}| \cdot \sin{\theta}$

Where $\theta$ is the angle from the positive $x$-axis. Since our numbers are from both the positive and negative $x$-axes, we might have to adjust the sign of the answers. 

We can substitute the values in our original equation using this general vector rule on the properties we know of both $\vec{A}$ and $\vec{C}$:

$\vec{V_{diff}} \ = \ <\left(  |\vec{A}| \cdot \cos{\theta_a} \right) - \left(  |\vec{C}| \cdot \cos{\theta_c} \right), \ \left(  |\vec{A}| \cdot \sin{\theta_a} \right) - \left(  |\vec{C}| \cdot \sin{\theta_c} \right)>$

For my example problem, this would work out to:
> $\vec{V_{diff}} \ = \ <\left(  67.2 \cdot \cos{28.9°} \right) - \left(  44.9 \cdot \cos{-90°} \right), \ \left(  67.2 \cdot \sin{28.9°} \right) - \left(  44.9 \cdot \sin{-90°} \right)>$
> >
> $\vec{V_{diff}} \ = \ <58.83, \ 77.38>$

or in simpler terms:
> $V_{diff,x} = 58.83$
> >
> $V_{diff,y} =  77.38$

Then to find the length of the angle, we can use the process we outlined before with the Pythagorean theorem:
> $|\vec{V_{diff}}| = \sqrt{\left( V_{diff,x} \right)^2 + \left( V_{diff,y} \right)^2}$

Which for my example would be:
> $|\vec{V_{diff}}| = \sqrt{\left( 58.83 \right)^2 + \left( 77.38 \right)^2}$
> >
> $|\vec{V_{diff}}| = 97.20$

#### Part 2: Vector Angle
To find the angle of this vector, we can use $\tan^{-1}$ as in previous questions:
> $\theta = \tan^{-1}{\left( \frac{V_{diff, y}}{V_{diff, x}} \right)}$

Which for my calculations would be:
> $\theta = \tan^{-1}{\left( \frac{77.38}{58.83} \right)}$
> >
> $\theta = 52.76 \ deg$

This angle between $0$ and $90$ degrees is in the first quadrant, just like our $<+, \ +>$ vector, so no need for any adjustments. However, if there are, follow the steps outlined in previous problems.

Given this, in my case the final solution is `52.76 deg`

## Q5: Dot Product 1

### Question
> What is the dot product of $\vec{V_1}$ with a magnitude of $20$ and a direction of $236°$ and $\vec{V_2}$ with a magnitude of $13$ and a direction of $218°$
### Variable Breakdown
> $|V_1| = 20$
> >
> $\theta_1 = 236°$
> >
> $|V_2| = 13$
> >
> $\theta_2 = 218°$

### Steps / Solution
#### Dot Product of the Vectors
To find the dot product of vectors, we can use the following expression:

$\vec{V_1} \cdot \vec{V_2} \ = \ V_{1,x}V_{2,x} + V_{1,y}V_{2,y}$

To find $V_{1,x}$, $V_{2,x}$, $V_{1,y}$, and $V_{2,y}$, we can use the relationships that we established earlier between the scalar sub-$x$ and sub-$y$ components of the vectors, and their magnitudes & angles:

$V_x \ = \ |\vec{V}| \cdot \cos{\theta}$

$V_y \ = \ |\vec{V}| \cdot \sin{\theta}$

Applied to the context of this question, this would be:

$V_{1,x} \ = \ |\vec{V_1}| \cdot \cos{\theta}$

$V_{2,x} \ = \ |\vec{V_2}| \cdot \cos{\theta}$

$V_{1,y} \ = \ |\vec{V_1}| \cdot \sin{\theta}$

$V_{2,y} \ = \ |\vec{V_2}| \cdot \sin{\theta}$

Which when substituted into the original equation give:

$\vec{V_1} \cdot \vec{V_2} \ = \ \left( |\vec{V_1}| \cdot \cos{\theta_1} \right)\left( |\vec{V_2}| \cdot \cos{\theta_2} \right) + \left( |\vec{V_1}| \cdot \sin{\theta_1} \right)\left( |\vec{V_2}| \cdot \sin{\theta_2} \right)$

For my values, this would work out to:
> $\vec{V_1} \cdot \vec{V_2} \ = \ \left( |\vec{V_1}| \cdot \cos{\theta_1} \right)\left( |\vec{V_2}| \cdot \cos{\theta_2} \right) + \left( |\vec{V_1}| \cdot \sin{\theta_1} \right)\left( |\vec{V_2}| \cdot \sin{\theta_2} \right)$
> >
> $\vec{V_1} \cdot \vec{V_2} \ = \ \left( 20\cos{236°} \right)\left( 13\cos{218°} \right) + \left( 20\sin{236°} \right)\left( 13\sin{218°} \right)$
> >
> $\vec{V_1} \cdot \vec{V_2} \ = 247.27$

Leaving me with a final answer of `247.27`

## Q6: Dot Product 2

### Question
> $\vec{V_1}$ equals $<17.5, \ 13.1, \ 1>$. $\vec{V_2}$ equals $<14.2, \ 5.4, \ 6.5 >$. What is the dot product of $\vec{V_1}$ and $\vec{V_2}$?

### Variable Breakdown
> $\vec{V_1} \ = \ <17.5, \ 13.1, \ 1>$
> >
> $\vec{V_2} \ = \ <14.2, \ 5.4, \ 6.5>$

### Steps / Solution
To find the solution to this problem, we'll be following the same steps as in **Q2**, just with a little less setup. If you're feeling solid on that question, feel free to try doing this one on your own!
> Note: Q2 could also be solved from the angles and magnitudes directly, but it shouldn't really matter as long as we follow the process.

The format of the vectors is similar to before, just with the added $z$-axis:

$\vec{V} \ = \ <V_x, \ V_y, \ V_z>$

Since this question is in 3 dimensions, we'll use a slightly longer form of the scalar dot product from **Q2**:

$\vec{V_1} \cdot \vec{V_2} \ = \ V_{1,x}V_{2,x} + V_{1,y}V_{2,y} + V_{1,z}V_{2,z}$

That's it! For my example problem I just plugged in:
> $\vec{V_1} \cdot \vec{V_2} \ = \ V_{1,x}V_{2,x} + V_{1,y}V_{2,y} + V_{1,z}V_{2,z}$
> >
> $\vec{V_1} \cdot \vec{V_2} \ = \ 17.5*14.2 + 13.1*5.4 + 6.5*1$
> >
> $\vec{V_1} \cdot \vec{V_2} \ = \ 325.74$

Giving me a final answer of `325.74`

## Q7: Cross Product 1

### Question
> $\vec{V_1}$ has a magnitude of $1.1$ and a direction of $216$ degrees. $\vec{V_2}$ has a magnitude of $18.6$ and a direction of $215$ degrees. What is the magnitude of the cross product of these two vectors?

### Variable Breakdown
> $|\vec{V_1}| = 1.1$
> >
> $|\vec{V_2}| = 18.6$
> >
> $\theta_1 = 216°$
> >
> $\theta_2 = 215°$

For later use, we'll also define $\theta$ (with no subscript) as the angle between the two vectors:
> $\theta_\Delta = |\theta_2 - \theta_1|$
> >
> $\theta_\Delta = |215° - 216°|$
> >
> $\theta = 1°$
### Steps / Solution
While it would theoretically be possible (at least to the best of my knowledge) to find the cross product by using trig and some other fancy stuff, we have a much simpler expression that will allow us to find the magnitude of the cross product of two vectors:

$|\vec{V_1} \times \vec{V_2}| = V_1*V_2*\cos{\theta}$

or, to be more consistent with the styling we've been using:

$|\vec{V_1} \times \vec{V_2}| = |\vec{V_1}|*|\vec{V_2}|*\cos{\theta_\Delta}$

where $\theta_\Delta$ is the angle between the two vectors.

For my example problem, that just works out to:
> $|\vec{V_1} \times \vec{V_2}| = |\vec{V_1}|*|\vec{V_2}|*\cos{\theta_\Delta}$
> >
> $|\vec{V_1} \times \vec{V_2}| = 1.1*18.6*\cos{1°}$
>  >
>  $|\vec{V_1} \times \vec{V_2}| = 0.357$

Giving us a final solution of `0.357`


## Q8: Cross Product 2

### Question
> $\vec{A}$ has a magnitude of $15$ and a direction of $110°$ in the x-y plane. $\vec{B}$ has a magnitude of $5$ and a direction of $280°$ in the $x$-$y$ plane. What is the direction of $\vec{A} \times \vec{B}$?
> >
> [choose from a list of $+/-$ $x$, $y$, and $z$ directions]

### Variable Breakdown
> $|\vec{A}| = 15$
> >
> $|\vec{B}| = 5$
> > 
> $\theta_A = 110°$
> >
> $\theta_B = 280°$

### Steps / Solution
Cross products are a pretty weird concept to get ahold of. Ultimately, they're most interesting when we consider their geometric value as the **vector perpendicular to its two 'factors'**.

I'd strongly recommend [this Khan Academy article](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/cross-products-mvc) if you're still feeling stuck. Some key takeaways from the article are:
- The magnitude of the cross product is similar to the value of the dot product, being $|\vec{A}||\vec{B}|\sin{\theta}$ to *the dot product*'s $|\vec{A}||\vec{B}|\cos{\theta}$.
- We can use the right-hand rule, or draw a parallelogram, in order to find the direction perpendicular to both vectors.
- While dot products work in 2 dimensions, cross products are only consistent in 3.

We're going to do the math and write out the full cross product for the sake of completeness. If you want to preserve your sanity however, I'd suggest either drawing this one out, or using the right-hand rule when visualizing it. If you end up struggling on the next problem, in which you _will_ be forced to use this method, you can always come back!

#### The Matrix
The basic representation of the matrix we'll be using for the derivative shortcut is as follows:
>>
> $\begin{bmatrix}
\hat{i} & \hat{j} & \hat{k} \\
A_x & A_y & A_z \\
B_x & B_y & B_z 
\end{bmatrix}$

#### The Determinant
Using the steps outlined in [the associated Khan Academy article](https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/x786f2022:vectors-and-matrices/a/determinants-mvc) we can find the determinant:
>>
> $\vec{A} \times \vec{B} \ = \ 
\hat{i}\det{\begin{bmatrix}
A_y & A_z \\
B_y & B_z 
\end{bmatrix}} - 
\hat{j}\det{\begin{bmatrix}
A_x & A_z \\
B_x & B_z 
\end{bmatrix}} + 
\hat{k}\det{\begin{bmatrix}
A_x & A_y \\
B_x & B_y 
\end{bmatrix}}$
>>
> $\vec{A} \times \vec{B} \ = \ 
\hat{i}\left(
A_y B_z - A_z B_y
\right) - \hat{j}\left(
A_z B_x - A_x B_z
\right) + \hat{k}\left(
A_x B_y - A_y B_x
\right)$

#### Putting it all together
There's no easy way to show this generally without ending up with an overly verbose matrix, so pardon the mess. I'll skip over a lot for this question, so if you have any questions afterward, just shoot me a message and I'll try my best to explain things better in the context of an actual problem. In the meantime however, we'll just use the values I got, though them all being on the same $x$-$y$ plane doesn't really help us understand how this process really works.

I'll be skipping over the reasoning behind the trig but in this case the matrix is roughly equal to:
> $\begin{bmatrix}
\hat{i} & \hat{j} & \hat{k} \\
|\vec{A}|\cos{\theta_A} & |\vec{A}|\sin{\theta_A} & 0 \\
|\vec{B}|\cos{\theta_B} & |\vec{B}|\sin{\theta_B} & 0 
\end{bmatrix}$

From which we can calculate the determinant (cross product) as follows:

> $\vec{A} \times \vec{B} \ = \ 
\hat{i}\left(
0 - 0
\right) - \hat{j}\left(
0 - 0
\right) + \hat{k}\left(
\left( |\vec{A}|\cos{\theta_A} \right)\left( |\vec{B}|\sin{\theta_B} \right) - \left( |\vec{A}|\sin{\theta_A} \right)\left( |\vec{B}|\cos{\theta_B} \right)
\right)$
>>
> $\vec{A} \times \vec{B} \ = \ 
\hat{k}\left(
\left( |\vec{A}|\cos{\theta_A} \right)\left( |\vec{B}|\sin{\theta_B} \right) - \left( |\vec{A}|\sin{\theta_A} \right)\left( |\vec{B}|\cos{\theta_B} \right)
\right)$

While before this was still applicable to any vector set of $\vec{A}$ and $\vec{B}$ both existing in the $x$-$y$ plane, from here on out this is only applicable to my specific vectors. Note that since it's based on the unit vector $\hat{k}$, we already know that our result will be on the $z$-axis, we just need to find out if it's positive or negative.
> $\vec{A} \times \vec{B} \ = \ 
\hat{k}\left(
\left( |\vec{A}|\cos{\theta_A} \right)\left( |\vec{B}|\sin{\theta_B} \right) - \left( |\vec{A}|\sin{\theta_A} \right)\left( |\vec{B}|\cos{\theta_B} \right)
\right)$
>>
> $\vec{A} \times \vec{B} \ = \ 
\hat{k}\left(
\left( 15\cos{110°} \right)\left( 5\sin{280°} \right) - \left( 15\sin{110°} \right)\left( 5\cos{280°} \right)
\right)$
>>
> $\vec{A} \times \vec{B} \ = \ 
\hat{k}\left(
13.02
\right)$
>>
>13.02 is positive, so the cross product follows the $\hat{k}$ unit vector with a positive coefficient.

Giving me a final vector direction along the positive $z$-axis?

"**But wait**", you might say, "we calculated $\vec{A} \times \vec{B}$, but we need $\vec{A} \times \vec{B}$!"

You would of course be right, I did it wrong. Thankfully there's a simple relationship between the two orderings of cross products:

$\vec{B} \times \vec{A}\ = \ -\left(\vec{A} \times \vec{B}\right)$

I'm so glad I remembered to include that purposeful teaching moment (and definitely not mistake as a result of me mis-reading the question), since we now know that all we need to do is reverse the direction of the cross product we found in the incorrect order (only direction changes, not magnitude, though you could think of it being the inverse of the magnitude in the same direction as previously)

With this in mind, our real final answer is: the vector is in the `negative z direction`
