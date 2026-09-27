pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:/usr/bin:/bin:${env.PATH}"
    }

    stages {

        stage('Check Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Check Report') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'find . -name "playwright-report"'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                fingerprint: true,
                allowEmptyArchive: true
            )
        }
    }
}