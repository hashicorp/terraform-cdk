module "test" {
    source = "./modules/test"
}

output "module_value" {
    value = module.test.foo
}