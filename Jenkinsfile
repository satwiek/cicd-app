pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'satwiek'
        DOCKER_HUB_PASS = credentials('docker-hub-token')
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'staging', url: 'https://github.com/satwiek/cicd-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t cicd-app:latest .'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh '''
                echo $DOCKER_HUB_PASS | docker login -u $DOCKER_HUB_USER --password-stdin
                docker tag cicd-app:latest $DOCKER_HUB_USER/cicd-app:latest
                docker push $DOCKER_HUB_USER/cicd-app:latest
                '''
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
