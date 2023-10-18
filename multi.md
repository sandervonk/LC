# Multivariable Calculus Notes

## Important Info
> The upcoming test will be on chapters **12.1 - 12.4**
> - **12.1-12.2**: 
>   - Vectors
>   - Parallelogram rule
>   - Triangle rule
>   - Position vectors
>   - Vector operations
>   - Unit vector in a certain direction
>   - Unit vector in the direction of given vector
>   - Canoe problem
>   - Airplane problem
>   - Distance formula
>   - Midpoint formula
>   - $\hat i$, $\hat j$, $\hat k$
>   - Graphing simple planes
>   - Cylinders
>   - Spheres
> - **12.3**: 
>   - Dot/Scalar product
>   - Angles between vectors
>   - Properties of dot products
>   - Orthogonal projections
> - **12.4**: 
>   - Cross/Vector product
>   - Determinant form
>   - Properties of the cross product
>   - Area of triangle

### [My test prep resources](./test/1) 

# Day 1: Basics of Vectors

## Parallel Vectors
$\vec u$ and $\vec u$ are parallel if $\vec u$ can be expressed as some scalar constant times $\vec v$:  
$$\vec u = c * \vec v$$  
where
$c$ is a scalar, $c \in \mathbb R$

## Component form
### In 2 Dimensions
$$\vec u = <u_x, u_y>$$
From this we can determine magnitude as:
$$||\vec u|| = \sqrt{u_x^2 + u_y^2}$$

### In 3 Dimensions
$$\vec u = <u_x, u_y, u_z>$$
From this we can determine magnitude as:
$$||\vec u|| = \sqrt{u_x^2 + u_y^2 + u_z^2}$$

## Unit vector
The unit vector in the direction of $\vec u$ can be defined as:
$$\vec v = \frac{\vec u}{||\vec u||}$$

Unit vectors are vectors with magnitude $1$. The basic unit vectors are:  
$$\hat i \ = \ <1,0,0> \\
\hat j \ = \ <0,1,0> \\
\hat k \ = \ <0,0,1>$$

$\hat i$ is $\in \mathbb R$, $\mathbb R^2$, and $\mathbb R^3$,  
$\hat j$ is $\in \mathbb R^2$ and $\mathbb R^3$, and  
$\hat k$ is $\in \mathbb R^3$ 

## Applying Scalar constants
We can apply a scalar constant $c \in \mathbb R$ to a vector $\vec u$ by:

### Applying it to its components
$$\vec v = c \cdot <u_x, u_y, u_z> = <c \cdot u_x, c \cdot u_y, c \cdot u_z>$$
### Applying it to the magnitude
$$||\vec v|| = c \cdot ||\vec u||$$

# Vectors in 3D
## Right-Hand Rule
Using your right hand, make an L with your pointer finger and thumb, and an L with your pointer and middle fingers.  

This is a convention we follow for graphing, and any graph we draw should conform to this.

The $+x$-axis is represented by our *pointer finger*  
The $+y$-axis is represented by our *middle finger*  
The $+z$-axis is represented by our *thumb*  

You can have the graph oriented any way you want, but it should always be of **octant 1**, and follow the right hand rule.

## Coordinate Planes
For a 2D space, we only have one plane, the $x$-$y$ plane, but in 3D, we can define any plane as:
$x = c$, 
$y = c$, or
$z = c$.  

This means that the specified axis has a value of $c$ (again, $c \in \mathbb R$), while the other two can be anything

## Octants
Each unique combination of signs $(\pm, \pm, \pm)$ is an octant. If you chopped the block that the coordinate plane represents along each major axis ($x$, $y$, $z$), you would be left with these 8 octants.

In the first octant, x, y, and z should all be positive

## Surfaces and Intersection
A surface is anything that has area.

### Example 1
To draw the intersection between the plane $z=2$ and sphere $x^2+y^2+z^2=9$ for example, we can say that since the $z$ must equal $2$:

$x^2+y^2+z^2=9$  
$z=2$  

$x^2+y^2+\left(2\right)^2=9$  
$x^2+y^2=5$  
$x^2+y^2=\left(\sqrt{5}\right)^2$  

This is the equation for a cylinder with radius $\sqrt{5}$, since $z$ is arbitrary. However, we know that $z$ must equal $2$ for this equation for it to intersect, so we can take the slice at $z=2$, which leaves us with a circle.

# Day 2
*I wasn't here. [Lmk](https://svonk.me/#contact-block) if you want to add anything!*

# Day 3: Lines & Planes

## Cross Product
The cross product gives us the vector perpendicular to the plane created by two vectors.

It's not communicative, the order **does** matter.


There's several different methods of writing it out; remember that:
$$|\vec u \times \vec v| = |\vec u|*|\vec v|*\sin{\Theta}$$

To find the cross product, we'll set up the matrix in the format:

$$\begin{bmatrix}
\hat{i} & \hat{j} & \hat{k} \\
A_x & A_y & A_z \\
B_x & B_y & B_z 
\end{bmatrix}$$

which has a determinant (cross product) of:

$$\vec{A} \times \vec{B} \ = \ 
\hat{i}\left(
A_y B_z - A_z B_y
\right) - \hat{j}\left(
A_x B_z - A_z B_x
\right) + \hat{k}\left(
A_x B_y - A_y B_x
\right)$$

### Finding area of a triangle

When drawing out the triangle of vectors, make sure that they **diverge** from the same point

#### Example:
> The area of the triangle with vertices:  
$\dot A=(0,0,0) \\ \dot B=(3,0,1) \\ \dot C=(1,1,0)$

The magnitude of the cross product is the area created by their triangle

### Finding a vector parallel to a line going through a point

Lines in space can be created by parametrizing the function of a line,  
**OR**  
Create the vector connecting the two points, which will be parallel, then transform it to go through the first point!


# Day 4: 

## Line between two points  
>$\dot P = \left\langle x_0, y_0, z_0 \right\rangle$  
>$\dot Q = \left\langle x, y, z \right\rangle$  

$\vec{PQ} = \left\langle x-x_0, y-y_0, z-z_0 \right\rangle$

We know that $\overline{PQ} \parallel \vec{PQ}$, so we can start creating our vector valued function:

### Vector Valued Function Form
> $\left\langle x-x_0, y-y_0, z-z_0 \right\rangle = \left\langle at, bt, ct \right\rangle$  

### Parametric Form
> $x-x_o = at$,  
$y-y_o = bt$,  
$z-z_0 = ct$

### Symmetric Form
> $\frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c}$

## Intersection of Lines
Determine which of the following the lines are:
> 1. **Intersecting**: Intersect at a point
> 2. **Parallel**: Have the same direction
> 3. **Skewed**: Not parallel, but do not intersect (only possible in $\mathbb R^3$ or higher)

### Example
A typical problem might look like:
> Determine if thel ines intersect, are parallel, or skew. If they intersect, find the point of intersection:  
> 1. $\vec r_1(t) = \left\langle 1+6t, 3-7t, 2+t \right\rangle$  (this is $L_1$)
> 2. $\vec r_2(s) = \left\langle 1+6s, 3-7s, 2+s \right\rangle$  (this is $L_2$)

#### Parallel:  
> $\vec v_1 = \langle<6, -7, 1>$  
$\vec v_2 = \langle<3, 1, 4>$  
$\frac{6}{3} \neq \frac{-7}{1}$  
**Not parallel**

#### Intersection - Systems
Since they are not parallel, we need to check if they intersect!

To do so, we can use systems of equations, to find if there's a point $t=c$ where the $x$, $y$, and $z$-components of the vectors are equal.

Solve only two of them, then keep the last component for later! (we haven't gone over this yet so I'm a little lost)

##### $\text {\textcircled{1}}$  The $x$-component
> $r_{1, x} = r_{2, x}$  
> $1+6t = 10+3s$   

##### $\text {\textcircled{2}}$  The $y$-component
> $r_{1, y} = r_{2, y}$  
> $3-7t = 6+s$   

##### $\text {\textcircled{3}}$  The $z$-component
> $r_{1, z} = r_{2, z}$  
> $2+t = 14+4s$   

#### Intersection - Solving
To find if there's a point, pick two of the component equations above and solve them as a system. Then, plug in the third that you haven't used yet, and try to see if there's a valid solution

##### Solving with $\text {\textcircled{1}}$ and $\text {\textcircled{2}}$

...

#### Composite Solution
The vector-valued functions $\vec r_1(t)$ and $\vec r_2(s)$ are **skewed**. There is thus **no point of intersection**.

## Planes
Planes are **surfaces**. To the best of my knowledge, they should have at least **two** arbitrary components, 
- **one** would make a line 
- **two** would make a point  

However, it's very possible to have **three** arbitrary components that relate to each other in such a way to form a plane

### Simple Examples:
> $x=4$  
> $y=2$  
> $z=-1$  

### Equation of a Plane
#### **Given**: 
- a point on the plane $\dot P_0 = (x_0, y_0, z_0)$, and
- vector normal to the plane (perpendicular to every vector contained in the plane--any line on the plane); $\vec n \perp \vec{PQ}$; $\vec n = \langle a,b,c \rangle$

#### **Find**:
- a second point on the plane $\dot Q = (x, y, z)$

#### **Solution**:
- $a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$

### Example Problem:
#### Example 1
> Find the equation of the plane passing through the point $(5,3,5)$ and perpendicular to the vector $2\hat i - 3 \hat j + \hat k$.  

$a(x-x_0) + b(y-y_0) + c(z-z_0) = 0$  
$2(x-5) - 3(y-3) + 1(z-5) = 0$  
$2(x-5) - 3(y-3) + 1(z-5) = 0$  
$2x - 3y + z = 6$  

### Parallel and Orthogonal Planes
To find if planes are perpendicular or parallel, find the dot product of their normal vectors $\vec n$.

#### Example 1
> Determine if the planes are perpendicular, parallel, or neither:  
> $x+2y-z=2$  
> $2x-2y+z=1$  

$\vec n_1 = \langle 1,2,-1 \rangle$  
$\vec n_2 = \langle 2,-2,1 \rangle$  

##### Checking if they're parallel
$\vec n_1$ is not a scalar multiple of $\vec n_2$, so they're **not parallel**  
##### Checking if they're perpendicular
$\vec n_1 \cdot \vec n_2 = 2-4-1 = -3$  
$\vec n_1 \cdot \vec n_2 = 3 \neq 1$  
They are **not perpendicular**

##### Solution
They are neither parallel nor perpendicular.

##### Tips
We can find the normal vector using the cross product.

# 14.1: Functions of Several Variables
## Functions of Two Variables
The definition is very similar to the definition for a function of one variable. The main difference being that instead of mapping values of one variable to values of another variable, we map ordered pairs of variables to another variable.

### Graphing Functions of Two Variables
Graphs of functions with two variables will be in $\mathbb R^3$ and create a surface, an example of which is a plane.

### Level Curves
We create level curves by approaching the function from the other direction than graphing. Instead of finding the $z$-value for each $(x,y)$-pairing, we graph the curves of $(x,y)$-pairings that correspond to certain $z$-values, normally in uniform step sizes.

![An example of level curves from the elevation of a natural structure](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/f6460d4a5e6fd5089b61ee292d7b584dedc3cdba)

![Level curves in a simple mathematical setting](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/4bf1a902dc2e315d0c4d6b9d99da412b761a1f76)

While level-curves are usually graphed in the $xy$ plane, we can also create traces called **vertical traces** in the $xz$ and $yz$ planes.

## Functions of More Than Two Variables
These are mostly similar to functions with 2 variables, but have another domain variable included as well. Though harder to graph, these can help us add additional important information into our calculations, such as environmental conditions that are just as important as where a point is in space (the $x$ and $y$-axes) to finding its $z$-component.

Another thing we could do is have the three axes be the input components, and have the output be the color of the surface! 

## Objectives
**4.1.1** Recognize a function of two variables and identify its domain and range.  

**4.1.2** Sketch a graph of a function of two variables.  

**4.1.3** Sketch several traces or level curves of a function of two variables.  

**4.1.4** Recognize a function of three or more variables and identify its level surfaces.  


# 14.2: Limits and Continuity
## Limit of a Function of Two Variables
When finding the limit of a function with two variables in $\mathbb R^2$, we adapt the way that we think about the limit to fit our additional dimensions.

Instead of before, when we could think of the limit as a line that slowly got shorter and shorter until it became the point we were examining, in $\mathbb R^2$, we can think of this as a circle that's getting smaller until it becomes the point $(x,y)$

![Limits in $\mathbb R^2$](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/ee3aa76c2cadf54d9abd56499cdb7962b1a8d4e3)

For the limit $$\lim_{(x,y) \to (a,b)} f(x,y)$$ in $\mathbb R^2$, we follow the same laws as with 2d limits, except now we plug in two variables. 

It can be helpful to expand and separate the limits, or perhaps rewrite them as $$\lim_{(x,y) \to (a,b)} f(x,y) = \lim_{x \to a} \left( \lim_{y \to b} f(x,y)\right) $$

Additionally, expanding a limit several smaller ones using the sum/difference rules can help make solving easier.

## Interior Points and Boundary Points
### Interior Points
A point $P_0$ is called an interior point of $S$ if there is a $δ$ disk centered around $P_0$ contained completely in $S$.
### Boundary Points
A point $P_0$ is called a boundary point of $S$ if every $δ$ disk centered around $P_0$ contains points both inside and outside $S$.
### Open and Closed Sets
$S$ is called an **open set** if every point of $S$ is an interior point. 

$S$ is called a **closed set** if it contains all its boundary points.

![a closed set](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/a534e52fae8b2f183d472456e4a363fd324ec41d)

### Connected Sets and Regions
An open set $S$ is a **connected set** if it cannot be represented as the union of two or more disjoint, nonempty open subsets.
  
A set $S$ is a **region** if it is *open*, *connected*, and *nonempty*.

## Continuity of Functions of Two Variables
particular, three conditions are necessary for $f(x)$ to be continuous at a point $x=a$:
- $f(a)$ exists.
- $\lim_{x→a} f(x)$ exists.  
- $\lim_{x→a} f(x)=f(a)$.
 
These three conditions are necessary for continuity of a function of two variables as well ( continuity at $(x,y)=(a,b)$ ). They just become:
- $f(a,b)$ exists.
- $\lim_{(x,y)→(a,b)} f(x,y)$ exists.  
- $\lim_{(x,y)→(a,b)} f(x,y)=f(a,b)$.

![The composition of two continuous functions is continuous](https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/0c8cc40554ec818e0b485bf3f56b1155b7f056ac)

## Functions of Three or More Variables
To determine the continuity of functions of 3+ variables, we must extend the concept of a $δ$-disk into more than two dimensions.

We can define the $δ$-disk/ball/etc in $n$ dimensions using the equation:
$$\left\{
	(x,y,z,... \, ,?) \in \mathbb R^n
	\mid
	\sqrt{
		\left(x-x_0\right)^2 +
		\left(y-y_0\right)^2 +
		\left(z-z_0\right)^2 +
		... +
		\left(?-?_0\right)^2
	} < \delta
\right\}$$
where there are $n$ components in the point notation, and $n$ items under the radical.

Pretty cool, but also pretty confusing!


## Objectives
**4.2.1** Calculate the limit of a function of two variables.

**4.2.2** Learn how a function of two variables can approach different values at a boundary point, depending on the path of approach.

**4.2.3** State the conditions for continuity of a function of two variables.

**4.2.4** Verify the continuity of a function of two variables at a point.

**4.2.5** Calculate the limit of a function of three or more variables and verify the continuity of the function at a point.


---

### Important LaTeX:

#### Vector Components
$\left\langle  
	x, y, z
\right\rangle$
#### Space
$\mathbb R$, $\mathbb R^2$, $\mathbb R^3$
<!--stackedit_data:
eyJwcm9wZXJ0aWVzIjoidGl0bGU6IE11bHRpdmFyaWFibGUgQ2
FsY3VsdXMgTm90ZXNcbmF1dGhvcjogU2FuZGVyIFZvbmtcbnRh
Z3M6ICdtdWx0aSxjYWxjdWx1cyx2ZWN0b3JzLGNyb3NzLXByb2
R1Y3QsZG90LXByb2R1Y3QnXG5jYXRlZ29yaWVzOiBtYXRoXG5k
YXRlOiAnMjAyMy0wOS0yNSdcbiIsImhpc3RvcnkiOlsxNTAzMz
Y4ODczLC0yNzk1MzIxMjMsLTY5MzI0MDc1NiwtMTM5MTg4NTgx
MiwxODkyMDE5MjYwLC0xNjkzMTExODIyLC0xMjgzODE3MjM4LC
0xNzc1MDg0MTk1LC0xMTU4NjQ5NywtNjE4NDExNzY1LDEwNDQ0
OTg1MjEsLTkwNjQzODg4MiwxOTU3ODc5MzU5LDE2MDc0ODk3ND
MsLTE4MzUxNzU2NjRdfQ==
-->