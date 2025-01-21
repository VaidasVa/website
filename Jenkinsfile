pipeline {
    agent any
    environment {
        DOCKER_API_URL = 'tcp://192.168.50.70:2375'
        DOCKER_IMAGE = 'vaidasv/website:latest'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/VaidasVa/website.git'
            }
        }
        stage('Build React App') {
            steps {
                sh 'npm install'
                sh 'npm run dev'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withServer(DOCKER_API_URL) {
                        docker.build(DOCKER_IMAGE).push()
                    }
                }
            }
        }
    }
}