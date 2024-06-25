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

        stage('Run Frontend Container') {
            steps {
                // Ejecutar el contenedor del frontend
                sh 'docker run -d -p 4200:4200 front-app'
            }
        }
    }

    post {
        always {
            // Detener y limpiar el contenedor después de la ejecución
            script {
                sh 'docker stop $(docker ps -a -q --filter ancestor=front-app)'
                sh 'docker rm $(docker ps -a -q --filter ancestor=front-app)'
            }
        }
    }
}
