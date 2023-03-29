# Lon Capa 7C | Guided Solutions

> By Sander Vonk

# *Lon Capa 7C - Question 1 | Torque 1

T = l * F

T = l * F * cos(theta)

> For my question:

> Elbow to wrist

T = (0.225 m + 0.06 m) * 19.0 N * cos(24 deg)

> Shoulder to wrist

T = (0.27 m + 0.225 m + 0.06 m) * 19.0 N * cos(24 deg)

T = 9.63 N*m




# *Lon Capa 7C | Question 2

> Question: "The figure below is a long stick with evenly spaced marks. The distance between two adjacent marks is *12.90* cm."

> Note: additional questions may refer to specific situations / values. Note also that the stick has letters in the order: "G L H K C D E A J F B" 

> Variables:
>
> d = *0.129* m

## Question Specifics

> Q1: "A force of 29.0 N is directed upward perpendicular to the stick at Point B. What is the torque from this force?"

> Q2: "A force of 34.0 N is directed downward perpendicular to the stick at Point J. What is the torque from this force?"

> Q3: "A force of 39.0 N is directed upward perpendicular to the stick at Point G. What is the torque from this force?"

> Q4: "A force of 32.0 N is directed upward at angle 36.6° to the right of the perpendicular to the stick at Point E. What is the torque from this force?"

> Q5: "A force of 34.0 N is applied horizontally to the left at E. What is the torque from this force?"

> Q6: ""

> Q7: ""


> General knowledge

T = l * cos(theta)* F for each

## Question 1

T = 6 * 0.129 m * 29 N

T = 22.45 N*m


## Question 2

T = 4 * 0.129 m * -34 N

T = -17.54 N*m


## Question 3

T = 4 * 0.129 m * 39 N * cos(180 deg)

T = -20.124 N*m


## Question 4

T = 2 * 0.129 m * 32 N * cos(36.6 deg)


## Question 5

T = sin(0 deg) * something

T = 0 N*m

## Question 6

T = T_1 + T_2

T_1 = 6 * 0.126 m * 29 N

T_2 = 4 * 0.126 m * 39 N * cos(180 deg)

T = 6 * 0.126 m * 29 N + 4 * 0.126 m * 39 N * cos(180  deg)

T = 2.27 N*m




# *Lon Capa 7C - Question 3 | Torque 3

> Question: "A horizontal board of length *7.7* m and mass *12.8* kg rests on two supports. The first support is at one end of the board.The second support is at a distance of *0.85* m from the other end of the board.What force does this second support exert on the board? Acceleration due to gravity is 9.81 m/s2.Give your answers to at least three significant figures. Answers must be accurate to 1%."

> Variables
>
> l_plank = *7.7* m
> d_2 = *0.85* m

## Solving

> Little/no details for this one, sorry

r_1 = 7.7/2

r_2 = 7.7/2 - 0.85


F_1 + F_2 = m * g

F_1 = m * g - F_2

F_1 * r_1 = F_2 * r_2

(m * g - F_2) * (7.7/2) = F_2 * (7.7/2 - 0.85)

(m * g) * (7.7/2) = F_2 * ((7.7/2) + (7.7/2) - 0.85)

F_2 = ((12.8 * 9.8) * (7.7/2) / ((7.7/2) + (7.7/2) - 0.85)

F_2 = 70.5




# *Lon Capa 7C - Question 4 | Torque 4

> Question: "If the head bolts on your new Viper are to be tightened to *56.0* N*m, what force must you exert on the end of your *35.9* cm wrench handle?"

> Variables
>
> T = *56.0* N*m
> l = *0.359* m


## Solving

T = F * l

F = T / l

> For my example

F = 56 N*m / 0.359 m

F = 156 N




# *Lon Capa 7C - Question 5 | Torque 5

## Solving

> Sorry, not much work for this one

T = F * l

> For my example

T = 83.3 N * (0.335m / 2)

T = 13.95 N*m

## The second part

T_w = T_s

F_w * (d_w / 2) = F_s * (d_s / 2)

F_s = (F_w * r_w) / r_s

> in the end, it's just the original force multiplied by the ratio of the shaft radii

F_s = F_w * (r_w / r_s)

> to make this easier, we can just make them the diameters, since those are both just the values multiplied by 2, so the fraction will stay the same

F_s = F_w * (d_w / d_s)

> for my question

F_s = 83.3 N * (0.335 m / 0.10 m)

F_s = 279.06 N




# *Lon Capa 7C - Question 6 | Torque 6

> Question: "A plank *4.1* m long and weighing *111* N has its left end resting on a block and the other end supported by a rope. The plank is in the horizontal position. If the greatest tension the rope can withstand is *445* N, how far from the block can a *62.2* kg girl walk out on the plank before the rope breaks?"

> Variables:
>
> l_plank = *4.1* m
> W_plank = *111* N
> F_t = *445* N
> m_girl = *62.2* kg


## Finding Torques

> we're basically saying the tension is equal to the weight of the girl (gravity working on them). The pivot point for tension will be the block on the left

T = F * l

### Torque of the girl's weight

T_g = F_g_girl * d

T_g = (m_girl * g) * d_girl

### Torque of the rope

T_r = F_t * l_plank

### Torque of the plank's weight (@ center of mass)

T_p = F_g_plank * l_cm

T_p = W_plank * (l_plank / 2)

## Putting it all together

T_r = T_g + T_p

F_t * l_plank = m_girl * d_girl * g + W_plank * (l_plank / 2)

## Final equation / Solving

d_girl = ((F_t * l_plank) - (W_plank * l_plank / 2)) / (m_girl * g)

> For my example:

d_girl = ((445 N * 4.1 m) - (111 N * 4.1 m / 2)) / (62.2 kg * 9.8 m/s^2)

d_girl = 2.61984 m