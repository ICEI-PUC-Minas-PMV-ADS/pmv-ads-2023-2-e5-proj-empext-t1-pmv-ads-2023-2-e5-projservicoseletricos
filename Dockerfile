
FROM ubuntu:latest AS build

# Atualiza e instala o JDK 17
RUN apt-get update && \
    apt-get install -y openjdk-17-jdk

# Copia o código-fonte para o contêiner
COPY . .


# Instala o Maven e compila o projeto
RUN apt-get install -y maven && \
    mvn clean install

# Estágio final
FROM openjdk:17-jdk-slim


# Copia o arquivo JAR compilado do estágio de construção
COPY --from=build /app/polo_back/polo/target/polo-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080
EXPOSE 8080

# Comando para executar a aplicação quando o contêiner for iniciado
ENTRYPOINT ["java", "-jar", "app.jar"]
