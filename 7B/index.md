# Lon Capa 7B - Question 1

> MCQ Reasoning

"The moment of inertia of a solid disk can never be the same as that for a solid sphere."
> No, they both have mass and radius in the equation, so even though they may be different shapes, since they dont have any other constraints, they can always be the same with the right masses or radii

"The linear force equations do not have angular analogues."
> N/A to this concept

"The moment of inertia of a sphere is less if it is hollow than if it is solid."
> No, it is greater if it is hollow (check the equations)

"A solid ball rolls down a slope faster than a hollow ball."
> No, with the same masses and radii, the coeff on the hollow ball is greater, so in the equation, the velocity would have to be smaller to compensate

"The way mass is distributed affects the moment of inertia."
> True, with the same mass and shape, for example having a cylinder with a hollow center, w/ same mass and radius, just a different distribution, will have a higher moment of inertia than its associated cylinder


# Lon Capa 7B - Question 2

> Question: "An automobile is traveling at v = 46 m/s and has wheels with radius R = 24.6 cm. Assuming that the wheels are disks which roll without slipping and have a mass m = 15 kg, what is the kinetic energy of rotation of the four tires in Joules?"

> Variables:
> v = 46 m/s
> R = 24.6 cm
> m = 15 kg
> n = 4 tires

KE = (0.5 * I * ω^2) * n

> Using the moment of inertia for a disk / cylinder

I = 0.5 * m * R^2

> Subbing it back into the original equation

KE = (0.5 * (0.5 * m * R^2) * ω^2) * n

> however, we don't know the angular velocity, only the transpositional velocity, so let's find that

ω = v/R

> now we can add this back into the equation:

KE = (0.5 * (0.5 * m * R^2) * (v/R)^2) * n

> with some rewriting we get:

KE = (0.5 * (0.5 * m * R^2)/(R^2) * v^2) * n

> Now we simplify:

KE = 0.25 * m * v^2 * n

> and just solve with your numbers!

> for my example:

KE = 0.25 * 15 kg * (46 m/s)^2 * 4

KE = 15 kg * (46 m/s)^2

KE = `31740 J`



# Lon Capa 7B | Question 3 - Rot NRG3

> Question: "Some objects with different shapes, masses, and radii are rolling on a flat surface, and they all have the same velocity. Their shapes are a sphere , a tube , or a cylinder . Order them by their total kinetic energy (rotational plus translational)., e.g. "1" is highest, "2" is second highest, etc. For ties put the same answer for both objects, and the next rank is increased by one, e.g. you can't have 1 1 2."

> The three objects:
>
> *tube* of mass *1kg*, radius 
*0.2m*
>
> *solid sphere* of mass *1kg*, 
radius *0.5m*
>
> *cylinder* of mass *1.5kg*, radius *0.3m*

> We can use our moment of inertia reference sheet:
> 
> [Moment of Inertia Table] (http://hyperphysics.phy- astr.gsu.edu/hbase/imgmec/mic.png)

## The Tube

> Use the hoop moment of inertia equation (assume near-0 thickness since we don't have an outside radius)

I = M * R^2

> Now use the numbers

I = 1.0kg * (0.2m)^2

I = `0.04 kg * m^2`

## The Sphere

> Use the table to find the moment of inertia equation

I = (2/5) * M * R^2

> Now use the numbers

I = (2/5) * 1kg * (0.5m)^2

I = .25 m^2 * 0.4kg

I = `0.1 kg * m^2`

## The Cylinder

> Use the table to find the moment of inertia equation 

I = 0.5 * M * R^2

> Now use the numbers

I = 0.5 * 1.5 kg * (0.3m)^2

I = 0.75 kg * 0.09m^2

I = `0.0675 kg * m^2`

## Early results:

> though this does not yet include the translational kinetic energies, nor the calculated KE_rot, as it is only the moments of inertia (I), the ranking as of now is:

> 1: Cylinder
> 2: Sphere
> 3: Tube

> Since that doesn't seem to be right, let's try including the translational kinetic energies

KE_t = 0.5 * m * v^2

> We'll have to add this to each in the end!

## Fixing the first part

> We found I, the moment of inertia, but need the KE_rot:

KE_rot = 0.5 * I * ω^2

> Then sub in ω

KE_rot = 0.5 * I * (v/r)^2

KE_rot = 0.5 * I * v^2 /r^2

KE_rot = 0.5 * (I / r^2) * v^2 

## Total Kinetic Energy

KE = KE_rot + KE_t

KE = 0.5 * (I / r^2) * v^2 + 0.5 * m * v^2

KE = 0.5 * v^2 * ((I / r^2) + m)

> Since velocity and the coeff are the same for all cases, we don't need them while comparing

KE = (I / r^2) + m

## The final comparison 

> I promise it's correct this time

KE = (I / r^2) + M

### Tube

I = M * R^2

KE = 2M

KE = 2.0 kg (ignore units, we factored out common factors)

### Sphere

I = (2/5) * M * R^2

KE = 0.4M + M

KE = 1.4M

KE = 1.4kg

### Cylinder

I = 0.5 * M * R^2

KE = 0.5 * M + M

KE = 1.5M

KE = 2.25 kg

## Final Ranking

1. Cylinder @ 2.25

2. Tube @ 2

3. Sphere @ 1.4




# Lon Capa 7B - Question 4

> Note: I did this incorrectly, check what nathan did in the end for the correct solution, I thought it would be nice to have the work regardless

> Question: "A bowling ball with a mass of *6.49* kg and a radius of *0.136* m starts from rest at a height of *2.36* m and rolls down a *48.3* deg slope. What is the translational speed of the ball when it leaves the incline?"

> Variables:
>
> m = 6.49 kg
> r = 0.136 m
> theta = 48.3 deg

## Solving

> Use conservation of energy concepts

TME_i = TME_f

U_g = KE_t + KE_rot

m * g * h = (0.5 * I * ω^2) + (0.5 * m * v^2)

> rewrite some of the equation

m*g*h = 0.5 * ((I * ω^2) + (m * v^2))

> use the moment of inertia equation for a sphere

I = 0.4 * m * r^2

g * h = 0.5 * ((0.4 * r^2 * ω^2) + v^2)

> now fix the angular momentum portion with its identity

ω = v / r

ω^2 = v^2 / r^2

g * h = 0.5 * ((0.4 * r^2 * (v^2 / r^2)) + v^2)

g * h = 0.5 * ((0.4 * v^2) + v^2)

g * h = 0.5 * v^2 * (0.4 + 1)

g * h = 1.4 * v^2

> now just solve for v

v^2 = (g * h) / 1.4

v = sqrt((g * h) / 1.4)

> for my example:

v = sqrt(((9.8 m/s^2) * 2.36 m) / 1.4)

v = 4.06 m/s ?

## Nathan being bad

v = sqrt((10/7) * g * h)

v = sqrt((10/7) * 9.8 m/s^2 * 2.36)

v = 5.75 m/s



# Lon Capa - Question 5 

> Question: "Calculate the rotational kinetic energy in the motorcycle wheel (figure below) if its angular velocity is *126* rad/s. The mass of the wheel is *10.6* kg and assume it to be a approximately an annular ring with an inner radius of *0.330* m and an outer radius of *0.380* m."

> Variables:
>
> ω = *126* rad/s
> m = *10.6* kg
> R_1 = *0.330* m
> R_1 = *0.380* m

> Finding moment of inertia

I = 0.5 * M * (R_1^2 + R_2^2)

KE_rot = 0.5 * I * ω^2

KE_rot = 0.25 * M * (R_1^2 + R_2^2) * ω^2

> For my example:

KE_rot = 0.25 * 10.6 * (0.33^2 + 0.38^2) * 126^2

KE_rot = `10656.7 J`



# Lon Capa 7B - Question 6

> Question: "A baseball pitcher throws the ball in a motion where there is rotation of the forearm about the elbow joint as well as other movements. If the linear velocity of the ball relative to the elbow joint is *19.0* m/s at a distance of *0.480* m from the joint and the moment of inertia of the forearm is *0.500* kg·m^2, what is the rotational kinetic energy of the forearm?"

> Variables:
>
> v = *19.0* m/s
> r = *0.480* m
> I = *0.500* kg·m^2


> we're just finding the kinetic energy of rotation, so use the equation:

KE_rot = 0.5 * I * ω^2

ω = v / r

ω^2 = v^2 / r^2

KE_rot = 0.5 * I * v^2 / r^2

> that's it!

> for my numbers:

KE_rot = 0.5 * .5 * 19^2 / 0.48^2

KE_rot = `391.7 J`