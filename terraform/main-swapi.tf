resource "aws_s3_bucket" "swapi-bucket" {
  bucket = var.BUCKET_NAME
  acl    = "public-read"
  policy = file("./policy.json")

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}
