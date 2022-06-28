variable "amis" { 
    default = "ami-07cda3e36c4068b1f"  
}

# RHEL ami: ami-07cda3e36c4068b1f 

variable "instance_type" {
    default = "t2.micro"  
}

variable "instance_type_internal" {
    default = "t2.medium"
}

variable "output_web_sg" {} 
variable "external_alb_sg" {} 
variable "output_bastion_ssh" {}   
variable "output_internal_alb_sg" {}

