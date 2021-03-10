import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
from celluloid import Camera


# Does all the derv functions and returns the derviative for the ODE solver
# The parameters are passed in through the ODE solver
def derv_combiner(initial_conditions, timegrid, total_pop, beta, gamma):
    sus, infected = initial_conditions[0:2]

    # rate of transmission * susceptible * infected rate
    dSdt = -beta * sus * (infected / total_pop)
    # postive derv_sus * (gamma * infected)
    dIdt = (beta * sus * (infected / total_pop)) - (gamma * infected)
    # positive derv_infected
    dRdt = gamma * infected

    return dSdt, dIdt, dRdt


def plot_sir(time_grid, sus, infected, recovered):
    fig = plt.figure()
    camera = Camera(fig)
    ax = fig.add_axes([0.1, 0.1, 0.8, 0.8])
    x_data, sus_data, infected_data, recovered_data = [], [], [], []
    for i in range(len(time_grid)):
        x_data.append(time_grid[i])
        sus_data.append(sus[i])
        infected_data.append(infected[i])
        recovered_data.append(recovered[i])
        ax.plot(x_data, sus_data, "b", alpha=0.5, lw=2, label="Susceptible")
        ax.plot(x_data, infected_data, "r", alpha=0.5, lw=2, label="Infected")
        ax.plot(x_data, recovered_data, "gray", alpha=0.5, lw=2, label="Recovered")
        camera.snap()

    ax.set_xlabel("days")
    ax.set_ylabel("Number of People")

    anim = camera.animate(interval=1)

    # Can change to your desired file location
    f = r"c://Users/briar/Desktop/animation.gif"

    anim.save(f)
    plt.show()


if __name__ == "__main__":
    # Params
    total_pop = 100000
    days = 200
    avg_contacts = 5
    prob_infect = 0.05
    recover_time = 10

    # Rate of transmission
    beta = avg_contacts * prob_infect
    # Rate of recovery
    gamma = 1 / recover_time

    # Each derv is a function of time
    time_grid = np.linspace(0, days, days)

    initial_infect = 100
    initial_recover = 0
    initial_sus = total_pop - (initial_infect + initial_recover)
    # Initial Conditions Tuple
    initial_conditions = (initial_sus, initial_infect, initial_recover)

    # Integrating each derivative over the timegrid
    results = odeint(
        derv_combiner, initial_conditions, time_grid, args=(total_pop, beta, gamma)
    )

    # .T turns the array into 3 rows and packages it to each variable
    # Should be 200 values for each variable, if you set days = 200
    sus, infected, recovered = results.T

    plot_sir(time_grid, sus, infected, recovered)
