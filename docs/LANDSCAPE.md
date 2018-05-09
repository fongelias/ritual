# Application Landscape
File describing technologies used

# technologies
## Client

### React
Component based UI library

### Redux
Predictable state management system framework

### React Router
SPA support with browser URL integration

## Server/Serverless

### Travis (CI/CD)
Travis is used to run tests on builds and deploy files to AWS Lambda and S3

### AWS (Host)
This application is hosted in AWS and uses the following resources:

#### Route 53
DNS services. Routes to Cloudfront CDNs

#### Cloudfront
CDN to cache and deliver S3 files. Error routing to support React Router

#### ACN
SSL certificate for Cloudfront CDNs

#### S3
Hosts static files

#### API Gateway
Exposes Lambda functions as API endpoints

#### Lambda
Serverless computation functions, primarily used for modifying user data in DynamoDB

#### DynamoDB
NoSQL database for storing data







