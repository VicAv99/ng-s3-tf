output "bucket_domain_name" {
  value       = aws_s3_bucket.swapi-bucket.bucket
  description = "Bucket Name"
}
