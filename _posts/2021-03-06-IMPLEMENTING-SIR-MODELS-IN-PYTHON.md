---
published: true
---

### Introduction - What are SIR Models

SIR models are simple epidemological models that are meant to predict the behavior of infectious diseases. Essentially, the model categorizes the population into three different categories:  Susceptible, Infected, and Recovered. Assuming that time is the independent variable in this model, we can generate three distinct dependent variables.

1. S(t) = number of susceptible people with respect to time
2. I(t) = number of infected people with respect to time
3. R(t) = number of recovered people with respect to time

Additionally, with this information we can create four initial conditions. 

1. S(t) + I(t) + R(t) = N, where N is the total population
2. S(0) = S_0 (S-naught)
3. I(0) = I_0 (I-naught)
4. R(0) = R_0 (R-naught)

Knowing all of this, we are ready to write a system of differential equations for this model, or in other words, derivates for each dependent variable. Below is an image for the system of equations.

![sys_eq](/images/sys_eq.png)

test to see if image is prese
