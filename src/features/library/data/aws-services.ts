import type { ServiceDefinition } from '@/shared/types';

export const awsServices: ServiceDefinition[] = [
  // Compute
  { id: 'aws-ec2', label: 'EC2', provider: 'aws', serviceType: 'EC2 Instance', icon: 'aws-ec2', category: 'compute', defaultColor: '#FF9900' },
  { id: 'aws-lambda', label: 'Lambda', provider: 'aws', serviceType: 'Lambda Function', icon: 'aws-lambda', category: 'compute', defaultColor: '#FF9900' },
  { id: 'aws-fargate', label: 'Fargate', provider: 'aws', serviceType: 'Fargate Service', icon: 'aws-fargate', category: 'compute', defaultColor: '#FF9900' },
  { id: 'aws-batch', label: 'Batch', provider: 'aws', serviceType: 'Batch Job', icon: 'aws-batch', category: 'compute', defaultColor: '#FF9900' },
  { id: 'aws-lightsail', label: 'Lightsail', provider: 'aws', serviceType: 'Lightsail Instance', icon: 'aws-lightsail', category: 'compute', defaultColor: '#FF9900' },
  { id: 'aws-elastic-beanstalk', label: 'Elastic Beanstalk', provider: 'aws', serviceType: 'Beanstalk App', icon: 'aws-elastic-beanstalk', category: 'compute', defaultColor: '#FF9900' },

  // Containers
  { id: 'aws-ecs', label: 'ECS', provider: 'aws', serviceType: 'ECS Cluster', icon: 'aws-ecs', category: 'containers', defaultColor: '#FF9900' },
  { id: 'aws-eks', label: 'EKS', provider: 'aws', serviceType: 'EKS Cluster', icon: 'aws-eks', category: 'containers', defaultColor: '#FF9900' },
  { id: 'aws-ecr', label: 'ECR', provider: 'aws', serviceType: 'Container Registry', icon: 'aws-ecr', category: 'containers', defaultColor: '#FF9900' },

  // Storage
  { id: 'aws-s3', label: 'S3', provider: 'aws', serviceType: 'S3 Bucket', icon: 'aws-s3', category: 'storage', defaultColor: '#FF9900' },
  { id: 'aws-efs', label: 'EFS', provider: 'aws', serviceType: 'Elastic File System', icon: 'aws-efs', category: 'storage', defaultColor: '#FF9900' },
  { id: 'aws-ebs', label: 'EBS', provider: 'aws', serviceType: 'Block Storage', icon: 'aws-ebs', category: 'storage', defaultColor: '#FF9900' },
  { id: 'aws-glacier', label: 'Glacier', provider: 'aws', serviceType: 'Archive Storage', icon: 'aws-glacier', category: 'storage', defaultColor: '#FF9900' },
  { id: 'aws-backup', label: 'Backup', provider: 'aws', serviceType: 'Backup Service', icon: 'aws-backup', category: 'storage', defaultColor: '#FF9900' },

  // Database
  { id: 'aws-rds', label: 'RDS', provider: 'aws', serviceType: 'RDS Instance', icon: 'aws-rds', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-dynamodb', label: 'DynamoDB', provider: 'aws', serviceType: 'DynamoDB Table', icon: 'aws-dynamodb', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-elasticache', label: 'ElastiCache', provider: 'aws', serviceType: 'ElastiCache Cluster', icon: 'aws-elasticache', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-aurora', label: 'Aurora', provider: 'aws', serviceType: 'Aurora Cluster', icon: 'aws-aurora', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-redshift', label: 'Redshift', provider: 'aws', serviceType: 'Data Warehouse', icon: 'aws-redshift', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-neptune', label: 'Neptune', provider: 'aws', serviceType: 'Graph Database', icon: 'aws-neptune', category: 'database', defaultColor: '#FF9900' },
  { id: 'aws-documentdb', label: 'DocumentDB', provider: 'aws', serviceType: 'Document Database', icon: 'aws-documentdb', category: 'database', defaultColor: '#FF9900' },

  // Networking
  { id: 'aws-cloudfront', label: 'CloudFront', provider: 'aws', serviceType: 'CloudFront Distribution', icon: 'aws-cloudfront', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-api-gateway', label: 'API Gateway', provider: 'aws', serviceType: 'API Gateway', icon: 'aws-api-gateway', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-elb', label: 'ELB', provider: 'aws', serviceType: 'Load Balancer', icon: 'aws-elb', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-route53', label: 'Route 53', provider: 'aws', serviceType: 'DNS Service', icon: 'aws-route53', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-vpc', label: 'VPC', provider: 'aws', serviceType: 'Virtual Private Cloud', icon: 'aws-vpc', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-nat-gateway', label: 'NAT Gateway', provider: 'aws', serviceType: 'NAT Gateway', icon: 'aws-nat-gateway', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-transit-gateway', label: 'Transit Gateway', provider: 'aws', serviceType: 'Transit Gateway', icon: 'aws-transit-gateway', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-direct-connect', label: 'Direct Connect', provider: 'aws', serviceType: 'Direct Connect', icon: 'aws-direct-connect', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-privatelink', label: 'PrivateLink', provider: 'aws', serviceType: 'VPC Endpoint', icon: 'aws-privatelink', category: 'networking', defaultColor: '#FF9900' },
  { id: 'aws-global-accelerator', label: 'Global Accelerator', provider: 'aws', serviceType: 'Global Accelerator', icon: 'aws-global-accelerator', category: 'networking', defaultColor: '#FF9900' },

  // Messaging
  { id: 'aws-sns', label: 'SNS', provider: 'aws', serviceType: 'Simple Notification', icon: 'aws-sns', category: 'messaging', defaultColor: '#FF9900' },
  { id: 'aws-sqs', label: 'SQS', provider: 'aws', serviceType: 'Simple Queue', icon: 'aws-sqs', category: 'messaging', defaultColor: '#FF9900' },
  { id: 'aws-mq', label: 'Amazon MQ', provider: 'aws', serviceType: 'Message Broker', icon: 'aws-mq', category: 'messaging', defaultColor: '#FF9900' },

  // Integration
  { id: 'aws-eventbridge', label: 'EventBridge', provider: 'aws', serviceType: 'Event Bus', icon: 'aws-eventbridge', category: 'integration', defaultColor: '#FF9900' },
  { id: 'aws-step-functions', label: 'Step Functions', provider: 'aws', serviceType: 'State Machine', icon: 'aws-step-functions', category: 'integration', defaultColor: '#FF9900' },
  { id: 'aws-appsync', label: 'AppSync', provider: 'aws', serviceType: 'GraphQL API', icon: 'aws-appsync', category: 'integration', defaultColor: '#FF9900' },

  // Security
  { id: 'aws-iam', label: 'IAM', provider: 'aws', serviceType: 'Identity & Access', icon: 'aws-iam', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-cognito', label: 'Cognito', provider: 'aws', serviceType: 'User Pool', icon: 'aws-cognito', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-waf', label: 'WAF', provider: 'aws', serviceType: 'Web App Firewall', icon: 'aws-waf', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-guardduty', label: 'GuardDuty', provider: 'aws', serviceType: 'Threat Detection', icon: 'aws-guardduty', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-secrets-manager', label: 'Secrets Manager', provider: 'aws', serviceType: 'Secrets Manager', icon: 'aws-secrets-manager', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-kms', label: 'KMS', provider: 'aws', serviceType: 'Key Management', icon: 'aws-kms', category: 'security', defaultColor: '#FF9900' },
  { id: 'aws-acm', label: 'ACM', provider: 'aws', serviceType: 'Certificate Manager', icon: 'aws-acm', category: 'security', defaultColor: '#FF9900' },

  // Monitoring
  { id: 'aws-cloudwatch', label: 'CloudWatch', provider: 'aws', serviceType: 'Monitoring', icon: 'aws-cloudwatch', category: 'monitoring', defaultColor: '#FF9900' },
  { id: 'aws-xray', label: 'X-Ray', provider: 'aws', serviceType: 'Distributed Tracing', icon: 'aws-xray', category: 'monitoring', defaultColor: '#FF9900' },
  { id: 'aws-cloudtrail', label: 'CloudTrail', provider: 'aws', serviceType: 'Audit Logging', icon: 'aws-cloudtrail', category: 'monitoring', defaultColor: '#FF9900' },

  // Analytics
  { id: 'aws-kinesis', label: 'Kinesis', provider: 'aws', serviceType: 'Data Stream', icon: 'aws-kinesis', category: 'analytics', defaultColor: '#FF9900' },
  { id: 'aws-athena', label: 'Athena', provider: 'aws', serviceType: 'Query Service', icon: 'aws-athena', category: 'analytics', defaultColor: '#FF9900' },
  { id: 'aws-glue', label: 'Glue', provider: 'aws', serviceType: 'ETL Service', icon: 'aws-glue', category: 'analytics', defaultColor: '#FF9900' },
  { id: 'aws-emr', label: 'EMR', provider: 'aws', serviceType: 'Hadoop/Spark', icon: 'aws-emr', category: 'analytics', defaultColor: '#FF9900' },
  { id: 'aws-quicksight', label: 'QuickSight', provider: 'aws', serviceType: 'BI Dashboard', icon: 'aws-quicksight', category: 'analytics', defaultColor: '#FF9900' },

  // Machine Learning
  { id: 'aws-sagemaker', label: 'SageMaker', provider: 'aws', serviceType: 'ML Platform', icon: 'aws-sagemaker', category: 'ml', defaultColor: '#FF9900' },
  { id: 'aws-bedrock', label: 'Bedrock', provider: 'aws', serviceType: 'Foundation Models', icon: 'aws-bedrock', category: 'ml', defaultColor: '#FF9900' },

  // Developer Tools
  { id: 'aws-codepipeline', label: 'CodePipeline', provider: 'aws', serviceType: 'CI/CD Pipeline', icon: 'aws-codepipeline', category: 'devtools', defaultColor: '#FF9900' },
  { id: 'aws-codebuild', label: 'CodeBuild', provider: 'aws', serviceType: 'Build Service', icon: 'aws-codebuild', category: 'devtools', defaultColor: '#FF9900' },
  { id: 'aws-codedeploy', label: 'CodeDeploy', provider: 'aws', serviceType: 'Deploy Service', icon: 'aws-codedeploy', category: 'devtools', defaultColor: '#FF9900' },

  // Management
  { id: 'aws-cloudformation', label: 'CloudFormation', provider: 'aws', serviceType: 'IaC Service', icon: 'aws-cloudformation', category: 'management', defaultColor: '#FF9900' },
  { id: 'aws-systems-manager', label: 'Systems Manager', provider: 'aws', serviceType: 'Ops Management', icon: 'aws-systems-manager', category: 'management', defaultColor: '#FF9900' },
];
