pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/mishrajiji/cypress-uatomation-framework.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run webdriverun'
                    }
                }
                stage('Slave Node2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/mishrajiji/cypress-uatomation-framework.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run webdriverun'
                    }
                }
            }
        }
    }
}
