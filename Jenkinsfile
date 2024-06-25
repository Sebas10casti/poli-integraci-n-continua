pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio
                git url: 'https://github.com/Sebas10casti/poli-integracion-continua.git', branch: 'main'
            }
        }

        stage('Build Frontend') {
            steps {
                dir('front') {
                    // Construir la imagen del frontend
                    sh 'docker build -t front-app .'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('back') {
                    // Construir la imagen del backend
                    sh 'docker build -t back-app .'
                }
            }
        }

        stage('Run Containers') {
            steps {
                // Ejecutar los contenedores
                sh 'docker-compose -f docker-compose.yml up -d'
            }
        }
    }

    post {
        always {
            // Detener y eliminar los contenedores después de la ejecución
            sh 'docker-compose -f docker-compose.yml down'
        }
    }
}
