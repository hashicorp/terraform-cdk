# -*- mode: ruby -*-
# vi: set ft=ruby :


$linux_provisioning = <<-'SCRIPT'
set -ex

sudo apt update
sudo apt install -y nodejs npm golang maven python3 python3-pip zip

# install dotnet
wget https://packages.microsoft.com/config/ubuntu/20.10/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb

pip install pipenv
npm install -g yarn

wget https://releases.hashicorp.com/terraform/0.15.4/terraform_0.15.4_linux_amd64.zip && sudo unzip terraform_0.15.4_linux_amd64.zip && sudo mv terraform /usr/local/bin/
SCRIPT


$windows_provisioning = <<-'SCRIPT'
$ChocoInstallPath = "$env:SystemDrive\ProgramData\Chocolatey\bin"
					
if (!(Test-Path $ChocoInstallPath)) {
    iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))
}

choco install -y golang maven-snapshot nuget.commandline nodejs python3 terraform git dotnetcore-sdk rsync
refreshenv
[Environment]::SetEnvironmentVariable("Path", 'C:\Python39\;C:\Python3\Scripts\;C:\Users\vagrant\AppData\Roaming\npm;C:\Program Files\Git\usr\bin;$env:Path', "User")
cd C:\Python39
mklink python3.exe python.exe
SCRIPT

$windows_provisioning2 = <<-'SCRIPT'
npm install -g yarn
pip install pipenv
refreshenv
SCRIPT

# pipenv and yarn in other provisioner?
Vagrant.configure("2") do |config|
  config.vm.define "linux" do |linux|
    linux.vm.box = "ubuntu/impish64"
    linux.vm.provision "shell", inline: $linux_provisioning
    linux.vm.synced_folder ".", '/home/vagrant/terraform-cdk'
  end

  config.vm.define "windows" do |windows|
    windows.vm.box = "gusztavvargadr/windows-10"
    windows.vm.provision "shell", inline: $windows_provisioning 
    windows.vm.provision "shell", inline: $windows_provisioning2
    windows.vm.guest = :windows
    windows.vm.communicator = "winrm"
    windows.vm.synced_folder ".", 'C:\Users\vagrant\terraform-cdk-origin'
  end
end
