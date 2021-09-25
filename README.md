# Cloud Functions Typescript Example

A sample project for deploying a Typescript function to Cloud Functions on Google Cloud Platform.

## Installation

1. Clone the repository.
2. Run `npm i` to install dependencies.  

## Pipeline

To setup this project with a GCP Source repository and build trigger, run the following two commands. Update `<your_repo_name>` to your repository name and `<trigger_name>` to the name of your build trigger. 

```
gcloud source repos create <your_repo_name>
gcloud beta builds triggers create cloud-source-repositories \
--name=<trigger_name> \
--repo=<your_repo_name> \
--branch-pattern="^master$" \
--build-config="cloudbuild.yaml"
```

## Permissions 
To allow public access to the function run the following command:

```
gcloud functions add-iam-policy-binding demo-function --member="allUsers" --role="roles/cloudfunctions.invoker"
```