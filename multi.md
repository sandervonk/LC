# Multivariable Calculus Notes

## Important Info
> The upcoming test will be on chapters **12.1 - 12.4**
> - **12.1**: 
> - **12.2**: 
> - **12.3**: 
> - **12.4**: 

# Day 1: Basics of Vectors

## Parallel Vectors
$\vec u$ and $\vec u$ are parallel if $\vec u$ can be expressed as some scalar constant times $\vec v$:  
$$\vec u = c \cdot \vec v$$  
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

# Day 2: ?

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


## Day 4: 

### Line between two points:  
>$\dot P = \left\langle x_0, y_0, z_0 \right\rangle$  
>$\dot Q = \left\langle x, y, z \right\rangle$  

$\vec{PQ} = \left\langle x-x_0, y-y_0, z-z_0 \right\rangle$

We know that $\overline{PQ} \parallel \vec{PQ}$, so we can start creating our vector valued function:

#### Vector Valued Function Form
> $\left\langle x-x_0, y-y_0, z-z_0 \right\rangle = \left\langle at, bt, ct \right\rangle$  

#### Parametric Form
> $x-x_o = at$,  
$y-y_o = bt$,  
$z-z_0 = ct$

#### Symmetric Form
> $\frac{x-x_0}{a} = \frac{y-y_0}{b} = \frac{z-z_0}{c}$

### Intersection of Lines
Determine which of the following the lines are:
> 1. **Intersecting**: Intersect at a point
> 2. **Parallel**: Have the same direction
> 3. **Skewed**: Not parallel, but do not intersect (only possible in $\mathbb R^3$ or higher)

#### Example
A typical problem might look like:
> Determine if thel ines intersect, are parallel, or skew. If they intersect, find the point of intersection:  
> 1. $\vec r_1(t) = \left\langle 1+6t, 3-7t, 2+t \right\rangle$  (this is $L_1$)
> 2. $\vec r_2(t) = \left\langle 1+6t, 3-7t, 2+t \right\rangle$  (this is $L_2$)

##### Parallel:  
> $\vec v_1 = \langle<6, -7, 1>$  
$\vec v_2 = \langle<3, 1, 4>$  
$\frac{6}{3} \neq \frac{-7}{1}$  
**Not parallel**

##### Intersect
Since they are not parallel, we need to check if they intersect!

To do so, we can use systems of equations, to find if there's a point $t=c$ where the $x$, $y$, and $z$-components of the vectors are equal.

###### The $x$-component
> $r_{1, x}$  
> $1+6t$  


Util:

$\left\langle  
	\text{content}
\right\rangle$
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTQzNzQ1OTk2NSwtMTc3NTA4NDE5NSwtMT
E1ODY0OTcsLTYxODQxMTc2NSwxMDQ0NDk4NTIxLC05MDY0Mzg4
ODIsMTk1Nzg3OTM1OSwxNjA3NDg5NzQzLC0xODM1MTc1NjY0XX
0=
-->