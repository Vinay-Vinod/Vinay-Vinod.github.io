---
published: true
---

### What are SIR Models?

SIR models are simple epidemological models that are meant to predict the behavior of infectious diseases. Essentially, the model categorizes the population into three different categories:  Susceptible, Infected, and Recovered. Assuming that time is the independent variable in this model, we can generate three distinct dependent variables.

1. S(t) = number of susceptible people with respect to time
2. I(t) = number of infected people with respect to time
3. R(t) = number of recovered people with respect to time

Additionally, with this information we can create four initial conditions. 

1. S(t) + I(t) + R(t) = N, where N is the total population
2. S(0) = S_0 (S-naught)
3. I(0) = I_0 (I-naught)
4. R(0) = R_0 (R-naught)

Knowing all of this, we are ready to write a system of differential equations for this model, or in other words, derivatives for each dependent variable. Below is an image for the system of equations.

![sys_eq](/images/sys_eq.png)

Analyzing the first equation we have the susceptible multiplied by the infected, which is also multiplied by a constant labelled __beta__. This constant most commonly represents the transmission rate of the disease. The negative sign in front represents how the value of __ds/dt__ can only go down because we are assuming that people cannot become susceptible again. Figuring out this equation, makes the equation __di/dt__ clear to derive. Since susceptible will flow into infected, the infected equation needs to inherit a positive equivalent of the susceptible equation. The second part of the equation represents the amount of people leaving the infected population in order to enter into the recovered. It involves subtracting the infected multiplied by a constant labelled __gamma__. This constant most commonly represents the recovery rate. Finally, the recovered equation essentially inherits from the infected equation by having a positive equivalent of the infected times __gamma__. The general flow of these equations is downstream, where ultimately each person will end up in the recovered population and can not go back to susceptible or infected. In more complex models however, this usually differs. Below is a picture of what an SIR graph typically looks like. 

![sample_sir](/images/sample_sir.png)

### Coding SIR Models 

Now that we have basic knowledge on the framework behind SIR models, we can finally implement them in Python. The first thing we have to do is import the necessary libraries. We need numpy, matplotlib, odeint from scipy, and celluloid. If you are not familiar with any of these libraries, I suggest you learn them before reading the rest of this blog. 
![imports](/images/imports.png)

Now we can create our initial parameters. We will need total population, total number of days, S_0, I_0, R_0, beta, and gamma. Some people like to just set beta and gamma right away, but I prefer a more customizable approach. As mentioned before, beta acts as the transmission rate. So, we can define the transmission rate as the average number of contacts a person has multiplied by the probability of infection. Gamma acts as the recovery rate, which we can define as one over the average recovery period. Additionally, we want to create an array that contains each day from our total number of days parameter in order to calculate each derivative and act as the x-axis in our graph. Finally, we want to create a variable that stores S_0, I_0, and R_0 so we can later pass that into a differential equation function. 
![params](/images/params.png)

Next we can move on to creating a function to calculate each derivative. The arguments needed in this function will be the initial conditions, timegrid, total population, beta and gamma. Initially you have to  create a susceptible and infected variable from the initial conditions. Otherwise, the rest of the code is pretty simple where you just create a variable for each derivative and set it equal to the equations we discussed prior. An important note to remember is that the infected part of the equations has to be represented as infected divided by total population. Otherwise you can just enter the susceptible, gamma, and beta the normal way. After all of this, you will return all three derivatives that are in the form of an array.
![derv_func](/images/derv_func.png)

Following this, it is time to create a function to plot our graph. While you can plot a regular graph, I prefer to plot an animated one, hence the reason to include celluloid. Here your parameters will be the time grid, susceptible, infected and recovered. Plotting using matplotlib is pretty standard. The one small caveat is how we integrate the animation. The way celluloid works is that it takes a snapshot each time the program graphs something and strings it together in the final animation. In adhere to do this, you have to create an empty list for each variable you will plot. Then in a loop add each specific array (with the index of the loop) to each specific variable. Afterwards plot that variable and the loop will repeat for every point. At the end, finalize the animation and make sure to add __plt.show__ in order to see the graph.
![plot_sir](/images/plot_sir.png)

Our final step is to actually get an array from the results of our differentiable equations and plot them in our plotting functions. Set a result variable equal to the odeint function with the parameters of the derivative function, initial conditions tuple, time grid, and the extra arguments of beta and gamma. Next you can create the susceptible, infected, and recovered variables and set them equal to a transposed version of the result array. Each variable will automatically be assigned to each row of the array. Finally, use the plotting function with your three variables and the time grid as the arguements.
![final_func](/images/final_func.png)

Below is an example of what your final product should look like. 
![animation](/images/animation.gif)

Here is the link for this code file: https://github.com/Vinay-Vinod/Vinay-Vinod.github.io/blob/master/downloads/sir_model.py 



