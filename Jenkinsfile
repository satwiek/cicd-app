pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'staging', url: 'https://github.com/satwiek/cicd-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-app:latest .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
                sh 'kubectl apply -f service.yaml'
            }
        }

    }
}
