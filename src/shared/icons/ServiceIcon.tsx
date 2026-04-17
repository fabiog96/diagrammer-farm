import { memo } from 'react';

import {
  TbServer, TbDatabase, TbBolt, TbWorld, TbShield,
  TbCloud, TbBox, TbNetwork, TbMail, TbContainer,
  TbBrain, TbChartBar, TbKey, TbStack2, TbRouter,
  TbCpu, TbBucket, TbUsers, TbLambda, TbNote,
  TbAlignLeft, TbRocket, TbServerBolt, TbCloudComputing,
  TbBrandDocker, TbDeviceFloppy, TbArchive, TbDeviceAnalytics,
  TbTopologyStar, TbPlugConnected, TbWebhook, TbShieldLock,
  TbFingerprint, TbLock, TbScan, TbEye, TbFileSearch,
  TbActivity, TbSearch, TbFilter, TbTransform, TbGitBranch,
  TbAutomation, TbSettingsAutomation, TbFileCode, TbCloudCog,
  TbApiApp, TbSchema, TbGauge, TbWand
} from 'react-icons/tb';


import { BsFiletypeJson } from "react-icons/bs";
import { FaReact, FaLaptopCode} from "react-icons/fa";


import { cn } from '@/shared/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  // AWS — Compute
  'aws-ec2': TbServer,
  'aws-lambda': TbLambda,
  'aws-fargate': TbServerBolt,
  'aws-batch': TbStack2,
  'aws-lightsail': TbCloudComputing,
  'aws-elastic-beanstalk': TbRocket,
  // AWS — Containers
  'aws-ecs': TbContainer,
  'aws-eks': TbContainer,
  'aws-ecr': TbBrandDocker,
  // AWS — Storage
  'aws-s3': TbBucket,
  'aws-efs': TbDeviceFloppy,
  'aws-ebs': TbDeviceFloppy,
  'aws-glacier': TbArchive,
  'aws-backup': TbArchive,
  // AWS — Database
  'aws-rds': TbDatabase,
  'aws-dynamodb': TbDatabase,
  'aws-elasticache': TbDatabase,
  'aws-aurora': TbDatabase,
  'aws-redshift': TbDeviceAnalytics,
  'aws-neptune': TbSchema,
  'aws-documentdb': TbDatabase,
  // AWS — Networking
  'aws-cloudfront': TbWorld,
  'aws-api-gateway': TbRouter,
  'aws-elb': TbNetwork,
  'aws-route53': TbWorld,
  'aws-vpc': TbShield,
  'aws-nat-gateway': TbTopologyStar,
  'aws-transit-gateway': TbTopologyStar,
  'aws-direct-connect': TbPlugConnected,
  'aws-privatelink': TbLock,
  'aws-global-accelerator': TbRocket,
  // AWS — Messaging
  'aws-sns': TbMail,
  'aws-sqs': TbMail,
  'aws-mq': TbMail,
  // AWS — Integration
  'aws-eventbridge': TbWebhook,
  'aws-step-functions': TbGitBranch,
  'aws-appsync': TbApiApp,
  // AWS — Security
  'aws-iam': TbKey,
  'aws-cognito': TbUsers,
  'aws-waf': TbShieldLock,
  'aws-guardduty': TbScan,
  'aws-secrets-manager': TbFingerprint,
  'aws-kms': TbLock,
  'aws-acm': TbShieldLock,
  // AWS — Monitoring
  'aws-cloudwatch': TbActivity,
  'aws-xray': TbSearch,
  'aws-cloudtrail': TbEye,
  // AWS — Analytics
  'aws-kinesis': TbStack2,
  'aws-athena': TbFileSearch,
  'aws-glue': TbTransform,
  'aws-emr': TbCloudComputing,
  'aws-quicksight': TbChartBar,
  // AWS — ML
  'aws-sagemaker': TbBrain,
  'aws-bedrock': TbWand,
  // AWS — Developer Tools
  'aws-codepipeline': TbAutomation,
  'aws-codebuild': TbSettingsAutomation,
  'aws-codedeploy': TbRocket,
  // AWS — Management
  'aws-cloudformation': TbFileCode,
  'aws-systems-manager': TbCloudCog,
  'azure-vm': TbServer,
  'azure-blob': TbBucket,
  'azure-sql': TbDatabase,
  'azure-functions': TbBolt,
  'azure-cosmos': TbDatabase,
  'azure-cdn': TbWorld,
  'azure-apim': TbRouter,
  'azure-lb': TbNetwork,
  'azure-aks': TbContainer,
  'azure-app-service': TbCloud,
  'azure-key-vault': TbKey,
  'azure-event-hub': TbMail,
  'gcp-compute': TbServer,
  'gcp-storage': TbBucket,
  'gcp-sql': TbDatabase,
  'gcp-functions': TbBolt,
  'gcp-firestore': TbDatabase,
  'gcp-cdn': TbWorld,
  'gcp-lb': TbNetwork,
  'gcp-gke': TbContainer,
  'gcp-app-engine': TbCloud,
  'gcp-cloud-run': TbBox,
  'gcp-pubsub': TbMail,
  'gcp-bigquery': TbChartBar,
  'generic-server': TbServer,
  'generic-database': TbDatabase,
  'generic-storage': TbBucket,
  'generic-network': TbNetwork,
  'generic-compute': TbCpu,
  'generic-computer': FaLaptopCode,
  'generic-users': TbUsers,
  'generic-react': FaReact,
  'generic-json': BsFiletypeJson,
  'generic-note': TbNote,
  'generic-text': TbAlignLeft
};

interface ServiceIconProps {
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}

const RawServiceIcon = ({ icon, className, style }: ServiceIconProps) => {
  const IconComponent = iconMap[icon] || TbCloud;

  return <IconComponent className={cn('text-foreground', className)} style={style} />;
};

export const ServiceIcon = memo(RawServiceIcon);
