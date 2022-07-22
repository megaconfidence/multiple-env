# multiple-env
A dummy multi-environment server backend

## Usage
This server has three important branches
- user
- vehicle
- company

which generates dummy data for that category type. These branches are meant to 
be deployed separately to individual servers and will give a response according.

The `main` branch is the entry point for the operation. It serves as a store 
for the currently activated server. So to set either one of the three resource 
category as active, make a post request to the server deploy from the `main` branch 
with a body having a key of `env`
