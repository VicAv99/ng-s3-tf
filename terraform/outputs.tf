output "bucket_domain_name" {
  value       = aws_s3_bucket.devops_frontend_bucket.bucket
  description = "Bucket Name"
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.frontend_devops_distribution.domain_name
  description = "Cloudfront Domain name"
}
