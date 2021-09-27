# Visualizing BNs

Learning and visualizing Bayesian Networks made easy

![image1](./images/img2.gif)

## Functionalities

* Allow beginners to easily learn and visualize Bayesian Networks;
* Help researchers to visualize networks learned in all the main libraries, such as bnlearn and PGMpy;
* Provide visualization tools for debugging and comparing structures and probability tables.

## How to use it

We are currently in early stages of development.

If you want to give an incentive or help us to make this work, please follow this project and create issues so we can discuss your ideas.

## Tools used

The app is divided in two major parts:

    1. The Bayesian Networks learning and inference server
    2. The Bayesian Networks visualization server

### Learning and Inference Server

* Python 3.8
* Django
* PGMPy
* PyMC3

### Visualization Server

* Node.js
* React.js
* D3.js
* Ant Design

## Roadmap

1. Create a Node.js + React webserver capable of:
    * ~Opening JSON files with network models~;
    * Plotting the networks with D3.js:
        * ~The plot will contain the edges and nodes~;
        * Each nodes when clicked ~will display its Conditional Probability Table~.

2. Create a Django webserver capable of:
    * Receiving a CSV dataset;
    * Learning a network based on the CSV dataset:
        * With selectable methodology (HillClimb, PC or K2)
    * Return the JSON with the learned network

3. Add methods that allow learned Bayesian Network to be compared to the base model

4. Add methods for combining Bayesian networks

## References

* Koller, D., & Friedman, N. (2009). Probabilistic graphical models: principles and techniques. MIT press.
* Murphy, K. P. (2012). Machine learning: a probabilistic perspective. MIT press.
* Neapolitan, R. E. (2004). Learning bayesian networks (Vol. 38). Upper Saddle River, NJ: Pearson Prentice Hall.
