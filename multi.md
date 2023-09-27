# Basics of Vectors

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

## Intersection and Surfaces
A surface is anything that has area.

To draw the intersection between the plane $z=2$ and sphere $x^2+y^2=9$ for example, we can say that since the $z$ must equal $2$:



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTI0MDE1MTc5NywtMTgzNTE3NTY2NF19
-->