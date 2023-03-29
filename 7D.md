
# Lon Capa 7D | Guided Solutions
> By Sander Vonk

# *Lon Capa 7D | Various MCQs (#1)

## Questions:

* A girl sitting on a bar stool with two equal masses in her outstretched arms is rotating counterclockwise at a speed of ω. She slowly brings her arms directly towards her body and as a result her angular speed increases. Based on this information which statement is true about the moment of inertia I for the system (girl + masses)?
  * `Incorrect | I Increases`
  * `Incorrect | I remains constant`
  * **`Correct | I decreases`**

* What is the direction of the force applied by her arms?
  * `Incorrect | upwards`
  * `Incorrect | downwards`
  * `Incorrect | radially outward`
  * `Incorrect | in the direction of the instant. velocity of each mass`
  * **`Correct | radially inward`**


* In the formula for the torque exerted on the masses by the girl (τ = r x F) what is the angle between the force vector F and the position r of the masses?
  * `Incorrect | 0 deg`
  * `Incorrect | 45 deg`
  * `Incorrect | 90 deg`
  * `Incorrect | 270 deg`
  * **`Correct | 180 deg`**


* The magnitude of the torque on the masses due to the force applied by the girl depends on the angle (θ) between the force and position of the masses in the following way:
  * `Incorrect | r * F`
  * `Incorrect | r * F * cos θ`
  * `Incorrect | r * F * tan θ`
  * **`Correct | r * F * sin θ`**


* Which statement below is true?
  * `Incorrect | The angular momentum of the system increases.`
  * `Incorrect | The angular acceleration of the system results from the torque due to her arms.`
  * `Incorrect | The kinetic energy of the system decreases because the moment of inertia decreases.`
  * **`Correct | There is no net external torque on the system`**



# *Lon Capa 7D | Puck on Table (#2)

## Original Angular Momentum

L = I * angular_v

L = (m * r^2) * (v / r)

> For my example

L = (0.16 kg * (0.35 m)^2) * ((0.80 m/s) / 0.35 m)

L = 0.0448 m^2*kg/s

## Angular Momentum After

> Angular momentum is conserved, stays the same

> For my example:

L = 0.0448 m^2*kg/s

## Moment of inertia

> From the first part

I = m * r^2

I = 0.16 kg * (0.35 m)^2

I = 0.0196 m^2*kg

## Second moment of inertia

> Calculate with new values

I = m * r^2

> For my example:

I = 0.16 kg * (0.14 m)^2

I = 0.003136 m^2*kg

## Work

> According to the hint:

p_rot = L^2 / 2*I

W = p_rot,f - p_rot,i

W = (L^2 / (2 * I_f)) - (L^2 / (2 * I_i))




# *Lon Capa 7D | Merry-go-round (#3)

> Question:
* A playground merry-go-round of radius R = 1.95 m has a moment of inertia I = 250 kg*m2 and is rotating at 9 rev/min about a frictionless vertical axle. Facing the axle, a 24-kg child hops onto the merry-go-round, and manages to sit down on the edge. What is the moment of inertia of the merry-go-round with the child included?
* What is the moment of inertia of the merry-go-round with the child included?

> Variables
>
> _might add later_

## First part

I_net = I_child + I_mgr

> Using the 

I_child = 1 * M * R^2

> For my example: 

I_child = 24 kg * (1.95 m)^2

I_child = 91.26 m^2 kg

I_net = I_child + I_mgr

> For my example:

I_net = 91.26 m^2 * kg + 250 m^2 * kg

I_net = 341.26 m^2 * kg


## Second Part

> Angular momentum must stay the same

L_i = L_f

L = I * ω

> Substitute

I_i * ω_i = I_f * ω_f

ω_f = (I_i / I_f) * ω_i

> Now plug in the values from your equations and question

> For my example:

ω_f = ((250 m^2 * kg) / (341.26 m^2 * kg)) * (9 rev / min)

ω_f = 6.5932 rev/min




# *Lon Capa 7D | Ice Skater (#4)

> Question: 
* Calculate the angular momentum of an ice skater spinning at 6.50 rev/s given his moment of inertia is 0.368 kg·m^2.
* He reduces his rate of spin (his angular velocity) by extending his arms and increasing his moment of inertia. Find the value of his moment of inertia if his angular velocity decreases to 1.25 rev/s.
* Suppose instead he keeps his arms in and allows friction of the ice to slow him to 3.10 rev/s. What average torque was exerted if this takes 13.0 s?

> Variables:
> 
> none for now, might update later

## First part

> Angular momentum equation

L = I * ω

> Plug in; For my example:
ω = (6.50 rev/s) * (2pi rad/rev)

L = (6.50 rev/s) * (2pi rad/rev) * (0.368 kg * m^2)

L = 15.03 kg * m^2 * rad / s

> since radians are unitless

L = 15.03 kg * m^2 / s

## Second part

> Angular momentum is conserved

L_i = L_f

I_i * ω_i = I_f * ω_f

I_f = I_i * (ω_i / ω_f)

> For my example:

I_f = (0.368 kg * m^2) * ((6.50 rev/s) / (1.25 rev/s))

I_f = 1.914 kg * m^2

## Third part

* Average torque:

τ_avg = ΔL/Δt

ΔL = I * Δω

τ_avg = (I * Δω)/Δt

> For my example

τ_avg = ((0.368 kg * m^2) * (3.1 rev/s - 6.5 rev / s) * (2 pi rad/rev)) / (13 sec)

τ_avg = -0.6 kg * m^2 * rad / s^2

> since radians are unitless

τ_avg = -0.60 kg * m^2 / s^2




# *Lon Capa 7D | Interlocked Skaters (#5)

> Question: 
* Twin skaters approach one another as shown in the figure below and lock hands. Calculate their final angular velocity, given each had an initial speed of 2.80 m/s relative to the ice. Each has a mass of 60.0 kg, and each has a center of mass located 0.700 m from their locked hands. You may approximate their moments of inertia to be that of point masses at this radius.
* Calculate the initial kinetic energy.
* Calculate the final kinetic energy.

## Final Angular Velocity

KE_i = KE_f

KE_rot,i + KE_linear,i = KE_rot,f + KE_linear,f

0 + KE_linear,i = KE_rot,f + 0

KE_linear,i = KE_rot,f

KE_linear,i = 2 * (0.5 * I * ω_f^2)

KE_linear,i = I * ω_f^2

ω_f = sqrt( KE_linear,i / I )

I = m * r^2

ω_f = sqrt( KE_linear,i / (m * r^2) )

> now using the value from the 2nd / 3rd parts for KE

> for my example:

ω_f = sqrt( 470.4 J / (60.0 kg * (0.7 m)^2) )

ω_f = 4 / s

> since radians are an invisible unit

ω_f = 4 rad/s

## Initial Kinetic Energy

KE_i = Σ(0.5 * m * (v_i)^2)

KE_i = 0.5 * ((m_1 * (v_1,i)^2) + 
(m_2 * (v_2,i)^2))

> for my example:

KE_i = 0.5 * ((60 kg * (2.80 m/s)^2) + (60 kg * (2.80 m/s)^2))

KE_i = 470.4 J

## Final Kinetic Energy

> Due to conservation of energy:

KE_f = KE_i (see previous)

> for my example:

KE_f = KE_i = 470.4 J