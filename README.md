# Getting Started with Create React App

This project was bootstrapped with 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

helm has 3 parts 
charts.yaml  - provides the information about the charts basically the meta data 
templates  - remove the pre loaded data and paste your k8s manifest in the template folder , advantages of templates are you can variablize the your k8s manifest
values.yaml

- argoCD implementation 
-installations
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

