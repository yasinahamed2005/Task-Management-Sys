pipeline {
    agent any

    tools {
        nodejs "node18"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/yasinahamed2005/Task-Management-Sys.git'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Start Backend') {
            steps {
                dir('backend') {
                    sh 'npm start &'
                }
            }
        }
    }
}
