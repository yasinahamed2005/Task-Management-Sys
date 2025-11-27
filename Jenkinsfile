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
                    bat 'npm install'
                }
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        // 🔹 Start FRONTEND dev server in background
        stage('Start Frontend') {
            steps {
                dir('frontend') {
                    // If your script is "start" (CRA), use:  bat 'start "" npm start'
                    // If your script is "dev" (Vite), use line below:
                    bat 'start "" npm run dev'
                }
            }
        }

        // 🔹 Start BACKEND in background
        stage('Start Backend') {
            steps {
                dir('backend') {
                    bat 'start "" npm start'
                }
            }
        }
    }
}
