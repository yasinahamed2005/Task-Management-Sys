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

        stage('Deploy Frontend to Tomcat') {
            steps {
                // clean old myapp folder (ignore error if not exists)
                bat 'rmdir /S /Q "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\myapp" || echo no old myapp'

                // create fresh myapp folder
                bat 'mkdir "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\myapp"'

                // copy Vite dist -> Tomcat myapp
                bat 'xcopy /E /I /Y "frontend\\dist\\*" "C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\webapps\\myapp\\"'
            }
        }

        stage('Restart Tomcat') {
            steps {
                bat '"C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\bin\\shutdown.bat" || echo Tomcat may already be stopped'
                bat '"C:\\Program Files\\Apache Software Foundation\\Tomcat 9.0\\bin\\startup.bat"'
            }
        }

        stage('Start Backend') {
            steps {
                dir('backend') {
                    // run backend in background so Jenkins job can finish
                    bat 'start "" npm start'
                }
            }
        }
    }
}
