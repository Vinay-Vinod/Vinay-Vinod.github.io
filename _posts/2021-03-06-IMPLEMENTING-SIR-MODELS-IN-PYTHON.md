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

Analyzing the first equation we have the susceptible multiplied by the infected, which is also multiplied by a constant labelled __beta__. This constant most commonly represents the transmission rate of the disease. The negative sign in front represents how the value of __ds/dt__ can only go down because we are assuming that people cannot become susceptible again. Figuring out this equation, makes the equation __di/dt__ clear to derive. Since susceptible will flow into infected, the infected equation needs to inherit a positive equivalent of the susceptible equation. The second part of the equation represents the amount of people leaving the infected population in order to enter into the recovered. It involves subtracting the infected multiplied by a constant labelled __gamma__. This constant most commonly represents the recovery rate. Finally, the recovered equation essentially inherits from the infected equation by having a positive equivalent of the infected times __gamma__. The general flow of these equations is downstream, where ultimately each person will end up in the recovered population and can not go back to susceptible or infected. In more complex models however, this usually differs. Below is a picture of what an SIR graph typically looks like. 

![sample_sir](/images/sample_sir.png)

### Coding SIR Models 

Now that we have basic knowledge on the framework behind SIR models, we can finally implement them in Python. The first thing we have to do is import the necessary libraries. We need numpy, matplotlib, odeint from scipy, and celluloid. 
![imports](/images/imports.png)

Now we can create our initial parameters. We will need total population, total number of days, S_0, I_0, R_0, beta, and gamma. Some people like to just set beta and gamma right away, but I prefer a more customizable approach. As mentioned before, beta acts as the transmission rate. So, we can define the transmission rate as the average number of contacts a person has multiplied by the probability of infection. Gamma acts as the recovery rate, which we can define as one over the average recovery period. Additionally, we want to create an array that contains each day from our total number of days parameter in order to act as the x-axis in our graph and it will allow us to calculate each derivative. Finally we want to create a variable that stores S_0, I_0, and R_0 so we can later pass that into a differential equation function. 
![params](/images/params.png)



