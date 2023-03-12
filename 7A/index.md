
# Lon Capa 7A: Questions 1-6
> By Sander Vonk

# *Lon Capa 7A | Question 1: Rotation

## First Part

> The percentage of the total circumference by which it changed is

arc length / circumference

arc / 2*pi*r

> then in radians

percentage * 2*pi

> final first part:

(arc / 2*pi*r) * 2*pi

> which we can rewrite as

arc / r

> for my example:

2.3 m / 1.15 m = 2 (radians)

## Second part:

> for degrees:

rad = deg * (pi/180)

deg = rad * (180 / pi)

> for my example:

deg = 2 * (180 / pi)

deg = 114.59 deg

## Third Part

> from before, we can rewrite the equation

angle = arc / r

> and solve for arc length

arc = angle * r

> for my example

arc = 4.1 * 0.9 m

arc = 3.69 m

---

# *Lon Capa 7A | Question 2: Rotation 2

## First Part

a = delta v / delta t

a = (v_f - v_i) / t

> just make sure to keep track of  your units (for example seconds vs minutes)

> for my example:

a = (2015.0 rev/min - 1820.0 
rev/min) * (60s / 1 min) / 19s

a = 615.79 rev/min^2

## Second Part

rev = v_avg * t

v_avg = (v_i + v_f)/2

rev = t * (v_i + v_f)/2

> for my example:

rev = 19s * (1820.0 rev/min + 2015.0 rev/min)/2 * (1 min / 60s)

rev = 607.21 rev

---

# *Lon Capa 7A | Question 3: Rotation 3

## Accelerating time

> the equations for rotation are very similar to their counterparts in linear motion
>
> in this example, we can reuse the equations for linear acceleration

d = v_o * t + 0.5 * a * t^2

> in rotational motion, this 
becomes:

angle = v_o * t + 0.5 * a * t^2

> where velocity is rotational velocity, and acceleration is rotational acceleration

angle = 0 * t + 0.5 * a * t^2

> then some simplification gets us

angle_1 = 0.5 * a * t^2

> we'll call t here t_a for t_acceleration

angle_1 = 0.5 * a * t_a^2

## Non-accelerating time


> however, this is only the angle after accelerating portion finishes; 
> To find the total change in the angle, we'll add the change with the final velocity

angle_2 = v_f * delta_t

angle_2 = a * t_a * (t_f - t_a)

## Final solution / angle

> then we'll combine the two to get

angle = angle_1 + angle_2

angle = 0.5 * a * t_a^2 + a * t_a * (t_f - t_a)

angle = (a * t_a) * (0.5 * t_a + (t_f - t_a))

angle = (a * t_a) * (-0.5 * t_a + t_f)

> for my example:

angle = (1.31 * 23.9) * (-0.5 * 23.9 + 54.7)

angle = 1338.46 rad


## Final Equation

angle = (a * t_a) * (-0.5 * t_a + t_f)


---

#Lon Capa 7A | Question 4: Rotation 4

## First Part

a = delta v / delta t

> For my example:

a = 34.6 rad/s / 0.472 s

a = 73.3 rad/s^2

## Second Part 

v_avg = (v_i + v_f) / 2

v_avg = v_f / 2

rev = v_avg * t * (1 rev / 2*pi rad)

rev = v_f * t / (4*pi)

> For my example:

rev = 34.6 rad/s * 0.472 s / (4*pi)

rev = 1.3 rev

---

# *Lon Capa 7A | Question 5 - Rotation 5

d = 2pi * r / rev

d = 2*pi*0.0416 m / rev

590 rev/min * 3.10 min * 2*pi*0.0416 m / rev

d = 478.065 m

---

# Lon Capa 7A | Question 6 - Rotation 6

## Part 1

α = a/r

α = 1.59 m/s^2 / 0.023 m

α = 69.130 rad/s^2

## Part 2

Δω = α * Δt

Δω = 69.130 rad/s^2 * 0.820s

Δω = 56.69 rad/s

## Part 3

a_t = rα

a_t = 0.0315 m × 69.13 rad/s^2

a_t = 2.18 m/s^2