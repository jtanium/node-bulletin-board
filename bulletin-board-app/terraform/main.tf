
module "node_bulletin_board" {
  source  = "my.scalr.com/env-stst3lhp1fhvffo/scalr_example/aws"
  version = "0.1.0"

  app_image = "jasonpayroc/node-bulletin-board:${var.tag}"
  dns_name = "${var.instance_name}.payroc.com"
  instance_name = var.instance_name
  instance_port = 8080
}
